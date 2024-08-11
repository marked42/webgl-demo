import { initBuffers } from './init.buffers.js'
import { drawScene } from './draw-scene.js'

const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        vColor = aVertexColor;
    }
`

const fsSource = `
    varying lowp vec4 vColor;
    void main() {
        gl_FragColor = vColor;
    }
`

/**
 * @param {WebGLRenderingContext} gl
 * @param {string} fsSource
 * @param {string} vsSource
 */
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource)
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource)

  const shaderProgram = gl.createProgram()
  gl.attachShader(shaderProgram, vertexShader)
  gl.attachShader(shaderProgram, fragmentShader)
  gl.linkProgram(shaderProgram)

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      'Unable to initialize the shader program: ' +
        gl.getShaderInfoLog(shaderProgram)
    )
    return null
  }

  return shaderProgram
}

/**
 * @param {WebGLRenderingContext} gl
 * @param {string} source
 */
function loadShader(gl, type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)

  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      'An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader)
    )
    gl.deleteShader(shader)
    return null
  }

  return shader
}

let squareRotation = 0.0

function main() {
  /** @type {HTMLCanvasElement} */
  const canvas = document.querySelector('#glcanvas')
  const gl = canvas.getContext('webgl')

  const shaderProgram = initShaderProgram(gl, vsSource, fsSource)

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(
        shaderProgram,
        'uProjectionMatrix'
      ),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  }

  const buffers = initBuffers(gl)

  var then = 0
  function render(now) {
    now *= 0.001
    const deltaTime = now - then
    then = now

    drawScene(gl, programInfo, buffers, squareRotation)
    squareRotation += deltaTime

    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)
}

main()
