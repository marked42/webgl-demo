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
  canvas.height = window.innerHeight
  canvas.style.width = window.innerWidth
  canvas.style.height = window.innerHeight

  const context = canvas.getContext('2d')

  context.fillStyle = 'green'
  context.fillRect(10, 10, 150, 100)
}

main()
