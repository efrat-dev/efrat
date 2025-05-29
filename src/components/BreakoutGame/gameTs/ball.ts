export function drawBall(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number,
    color: string
  ) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.strokeStyle = 'white'
    ctx.stroke()
    ctx.closePath()
  }
  
  export function updateBall(
    x: number,
    y: number,
    dx: number,
    dy: number,
    r: number,
    cw: number,
    ch: number,
    paddleX: number,
    paddleW: number,
    paddleH: number
  ) {
    x += dx
    y += dy
  
    if (x + r > cw || x - r < 0) dx *= -1
    if (y - r < 0) dy *= -1
    if (y + r > ch) {
      x = cw / 2
      y = ch - 30
      dy = -3.5
    }
  
    if (y + r > ch - paddleH && x > paddleX && x < paddleX + paddleW) {
      dy = -dy
    }
  
    return { ballX: x, ballY: y, ballDX: dx, ballDY: dy }
  }
  