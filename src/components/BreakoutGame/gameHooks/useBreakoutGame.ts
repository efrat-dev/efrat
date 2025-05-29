import { ref, onMounted } from 'vue'
import { techPool, type Brick } from '../gameTs/techPool'
import { initBricks, drawBricks, checkBrickCollision } from '../gameTs/bricks'
import { drawBall, updateBall } from '../gameTs/ball'
import { drawDrops } from '../gameTs/drops'
import { techCategories } from '../gameTs/techData'

export function useBreakoutGame() {
  const canvas = ref<HTMLCanvasElement | null>(null)
  const score = ref(0)
  const gameOver = ref(false)
  const categorizedTechs = ref<Record<string, string[]>>({})

  function restartGame() {
    location.reload()
  }

  function forceEndGame() {
    if (!gameOver.value) gameOver.value = true
  }

  const bricks: Brick[] = []
  const drops: { text: string; x: number; y: number; category: string }[] = []
  let ballColor = '#ffffff'

  onMounted(() => {
    if (!canvas.value) return
    const ctx = canvas.value.getContext('2d')!
    const canvasEl = canvas.value
    canvasEl.width = canvasEl.clientWidth
    canvasEl.height = canvasEl.clientHeight

    const cw = canvasEl.width
    const ch = canvasEl.height

    const brickWidth = 100
    const brickHeight = 30
    const padding = 20
    const offsetX = 60
    const offsetY = 50
    const cols = Math.floor((cw - offsetX * 2) / (brickWidth + padding))

    initBricks(bricks, techPool, cols, brickWidth, brickHeight, padding, offsetX, offsetY)

    let ballX = cw / 2
    let ballY = ch - 30
    let ballDX = 17.5
    let ballDY = -17.5
    const ballR = 22

    const paddleW = 100
    const paddleH = 10
    let paddleX = (cw - paddleW) / 2
  
    canvasEl.addEventListener('mousemove', (e) => {
      const rect = canvasEl.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      paddleX = mouseX - paddleW / 2
    })

    for (const [category, techDefs] of Object.entries(techCategories)) {
      categorizedTechs.value[category] = techDefs.map(t => t.name)
    } 

   function draw() {
      ctx.clearRect(0, 0, cw, ch)

      drawBricks(ctx, bricks, brickWidth, brickHeight)
      if (bricks.every((b) => b.hit)) {
        gameOver.value = true
        return
      }

      drawBall(ctx, ballX, ballY, ballR, ballColor)

      ctx.fillStyle = '#22D3EE'
      ctx.fillRect(paddleX, ch - paddleH, paddleW, paddleH)

      drawDrops(ctx, drops)

      ;({ ballX, ballY, ballDX, ballDY } = updateBall(
        ballX, ballY, ballDX, ballDY, ballR, cw, ch,
        paddleX, paddleW, paddleH
      ))

      ballColor = checkBrickCollision(bricks, ballX, ballY, ballR, score, drops, ballColor)

      requestAnimationFrame(draw)
    }

    draw()
  })

  return { canvas, score, gameOver, categorizedTechs, restartGame, forceEndGame }
}
