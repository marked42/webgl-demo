import { Size, Offset, RenderBox } from './lib.js'

function main() {
  /**
   * @type HTMLCanvasElement
   */
  const canvas = document.getElementById('canvas')
  if (!canvas) {
    alert('canvas not found')
  }

  canvas.width = window.innerWidth
  canvas.height = 1000
  canvas.style.width = window.innerWidth
  canvas.style.height = 1000

  const context = canvas.getContext('2d')

  const offset = new Offset(150, 100)
  const size = new Size(400, 600)
  const root = new RenderBox(context, offset, size)

  root.layout()
  root.paint()
}

main()
