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
    const iconWidth = 50
    const iconHeight = 50

    if (d.iconImg && d.iconImg.complete && d.iconImg.naturalWidth > 0) {
      const jitterX = Math.sin(d.y / 10) * 2
      ctx.drawImage(
        d.iconImg,
        d.x - iconWidth / 2 + jitterX,
        d.y - iconHeight / 2,
        iconWidth,
        iconHeight,
      )
    }

    ctx.fillStyle = 'white'
    ctx.font = '20px Arial'
    ctx.textAlign = 'center'
    ctx.fillText(d.text, d.x, d.y - iconHeight / 2 - 10) // 10 פיקסלים מעל האייקון

    d.y += 2
  })
}
