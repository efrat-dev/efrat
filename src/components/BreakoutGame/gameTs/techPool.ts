import { techCategories } from './techData'

export interface Brick {
  x: number
  y: number
  tech: string
  category: string
  hit: boolean
  color: string
}

function getRandomColor(): string {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const techPool: Brick[] = []

for (const [category, techs] of Object.entries(techCategories)) {
  for (const tech of techs) {
    techPool.push({
      tech: tech.name,
      category,
      x: 0,
      y: 0,
      hit: false,
      color: getRandomColor(),
    })
  }
}
