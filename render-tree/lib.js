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

export class RenderBox {
  /**
   * @param {CanvasRenderingContext2D} context
   */
  constructor(context, offset, preferredSize) {
    this.context = context
    this.offset = offset
    this.preferredSize = preferredSize
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

  paint() {
    const { offset, size } = this
    this.context.fillStyle = 'green'
    this.context.fillRect(offset.dx, offset.dy, size.width, size.height)
  }
}
