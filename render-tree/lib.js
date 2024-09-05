export class Size {
  constructor(width, height) {
    this.width = width
    this.height = height
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

  layout() {
    this.size = {
      ...this.preferredSize,
    }
  }

  paint() {
    const { offset, size } = this
    this.context.fillStyle = 'green'
    this.context.fillRect(offset.dx, offset.dy, size.width, size.height)
  }
}
