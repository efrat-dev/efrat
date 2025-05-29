export function drawDrops(
    ctx: CanvasRenderingContext2D,
    drops: { text: string; x: number; y: number; category: string }[]
  ) {
    drops.forEach((d) => {
      ctx.fillStyle = 'white'
      ctx.font = '28px Arial'
      ctx.fillText(d.text, d.x, d.y)
      d.y += 2
    })
  }
  