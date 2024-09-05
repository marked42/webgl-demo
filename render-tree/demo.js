import {
  Size,
  Offset,
  RenderBox,
  BoxConstraint,
  SingleChildRenderBox,
} from './lib.js'

function main() {
  /**
   * @type HTMLCanvasElement
   */
  const canvas = document.getElementById('canvas')
  if (!canvas) {
    alert('canvas not found')
  }

  const rootContainer = new BoxConstraint(0, window.innerWidth, 0, 1000)
  canvas.width = rootContainer.maxWidth
  canvas.height = rootContainer.maxHeight
  canvas.style.width = rootContainer.maxWidth
  canvas.style.height = rootContainer.maxHeight

  const context = canvas.getContext('2d')

  const offset = new Offset(150, 100)
  const size = new Size(400, 600)
  const root = new SingleChildRenderBox(context, offset, size)

  const childSize = new Size(200, 300)
  const child = new SingleChildRenderBox(context, offset, childSize)
  // TODO: child size exceeds parent
  child.setColor('blue')
  root.setChild(child)

  // largeContainer contains whole box
  const largeContainer = rootContainer

  root.layout(largeContainer)

  //   const mediumContainer = new BoxConstraint(0, 500, 0, 500)
  //   root.layout(mediumContainer)

  //   const smallContainer = new BoxConstraint(0, 200, 0, 200)
  //   root.layout(smallContainer)

  root.paint()
}

main()
