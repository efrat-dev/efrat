export function useCanvasDraw() {
    function draw(ctx: CanvasRenderingContext2D) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.fillStyle = 'hotpink'
      ctx.beginPath()
      ctx.arc(100, 100, 30, 0, Math.PI * 2)
      ctx.fill()
    }
  
    return { draw }
  }
  