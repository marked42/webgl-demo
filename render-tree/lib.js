export class Size {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
}

export function clamp(val, min, max) {
  if (val < min) {
    return min
  }
  if (val > max) {
    return max
  }
  return val
}

export class BoxConstraint {
  constructor(minWidth, maxWidth, minHeight, maxHeight) {
    this.minWidth = minWidth
    this.maxWidth = maxWidth
    this.minHeight = minHeight
    this.maxHeight = maxHeight
  }
}

export class Offset {
  constructor(dx, dy) {
    this.dx = dx
    this.dy = dy
  }
}

export class BoxRect {
  constructor(offset, size) {
    this.offset = offset
    this.size = size
  }
}

export class RenderBox {
  /**
   * @param {CanvasRenderingContext2D} context
   */
  constructor(context, offset, preferredSize) {
    this.context = context
    this.offset = offset
    this.preferredSize = preferredSize

    this.color = 'green'
  }

  layout(constraint) {
    this.size = {
      width: clamp(
        this.preferredSize.width,
        constraint.minWidth,
        constraint.maxWidth
      ),
      height: clamp(
        this.preferredSize.height,
        constraint.minHeight,
        constraint.maxHeight
      ),
    }
    console.log('box size: ', this.size)
  }

  setColor(color) {
    this.color = color
  }

  paint() {
    const { offset, size } = this.boxRect()
    this.context.fillStyle = this.color
    this.context.fillRect(offset.dx, offset.dy, size.width, size.height)
  }

  boxRect() {
    return new BoxRect(this.offset, this.size)
  }
}

export class SingleChildRenderBox extends RenderBox {
  constructor(context, offset, preferredSize) {
    super(context, offset, preferredSize)
  }

  setChild(child) {
    if (!child) {
      throw new Error('no child')
    }
    this.child = child
    child.parent = this
  }

  layout(constraint) {
    super.layout(constraint)
    if (this.child) {
      this.child.layout(constraint)
    }
  }

  boxRect() {
    const parentOffset = this.parent?.offset ?? new Offset(0, 0)
    const offset = new Offset(
      parentOffset.dx + this.offset.dx,
      parentOffset.dy + this.offset.dy
    )
    return new BoxRect(offset, this.size)
  }

  paint() {
    super.paint()
    if (this.child) {
      this.child.paint()
    }
  }
}
