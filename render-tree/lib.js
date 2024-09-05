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
  constructor(offset, size, preferredSize) {
    this.offset = offset
    this.size = size
    this.preferredSize = preferredSize
  }
}
