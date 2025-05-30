export interface Drop {
  text: string
  x: number
  y: number
  category: string
  iconUrl?: string
  iconImg?: HTMLImageElement
}

export function drawDrops(ctx: CanvasRenderingContext2D, drops: Drop[]) {
  // הגדרות כלליות מראש – לא בתוך הלולאה
  const iconWidth = 50
  const iconHeight = 50

  ctx.font = '20px Arial'
  ctx.textAlign = 'center'
  ctx.fillStyle = 'white'

  drops.forEach((d) => {
    // אפקט רטט עדין באייקון
    const jitterX = Math.sin(d.y / 10) * 2

    // ציור האייקון אם נטען
    if (d.iconImg && d.iconImg.complete && d.iconImg.naturalWidth > 0) {
      ctx.drawImage(
        d.iconImg,
        d.x - iconWidth / 2 + jitterX,
        d.y - iconHeight / 2,
        iconWidth,
        iconHeight
      )
    }

    // ציור הטקסט מעל האייקון
    ctx.fillText(d.text, d.x, d.y - iconHeight / 2 - 10)

    // עדכון המיקום האנכי של ה־Drop
    d.y += 2
  })
}