export interface Drop {
  text: string
  x: number
  y: number
  category: string
  iconUrl?: string
  iconImg?: HTMLImageElement 
}
  
export function drawDrops(ctx: CanvasRenderingContext2D, drops: Drop[]) {
  drops.forEach((d) => {
    if (d.iconImg && d.iconImg.complete) {
      if (d.iconImg && d.iconImg.complete && d.iconImg.naturalWidth > 0) {
        ctx.drawImage(d.iconImg, d.x - 35, d.y - 25, 30, 30)
      }
    }

    ctx.fillStyle = 'white'
    ctx.font = '28px Arial'
    ctx.fillText(d.text, d.x, d.y)

    d.y += 2
  })
}
