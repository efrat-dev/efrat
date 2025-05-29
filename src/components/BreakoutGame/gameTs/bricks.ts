import type { Brick } from './techPool'

export function initBricks(
  bricks: Brick[],
  techPool: Brick[],
  cols: number,
  brickWidth: number,
  brickHeight: number,
  padding: number,
  offsetX: number,
  offsetY: number
) {
  techPool.forEach((tech, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    const brick = { ...tech }
    brick.x = offsetX + col * (brickWidth + padding)
    brick.y = offsetY + row * (brickHeight + padding)
    bricks.push(brick)
  })
}

export function drawBricks(ctx: CanvasRenderingContext2D, bricks: Brick[], brickW: number, brickH: number) {
  bricks.forEach((b) => {
    if (!b.hit) {
      ctx.beginPath()
      ctx.fillStyle = b.color
      ctx.fillRect(b.x, b.y, brickW, brickH)
      ctx.strokeStyle = 'white'
      ctx.strokeRect(b.x, b.y, brickW, brickH)
      ctx.closePath()
    }
  })
}

export function checkBrickCollision(
  bricks: Brick[],
  ballX: number,
  ballY: number,
  ballR: number,
  score: { value: number },
  drops: { text: string; x: number; y: number; category: string }[],
  currentColor: string
): string {
  for (const b of bricks) {
    if (
      !b.hit &&
      ballX > b.x &&
      ballX < b.x + 100 &&
      ballY - ballR < b.y + 30 &&
      ballY + ballR > b.y
    ) {
      b.hit = true
      score.value += 10
      drops.push({ text: b.tech, x: b.x + 30, y: b.y + 30, category: b.category })
      return b.color
    }
  }
  return currentColor
}
