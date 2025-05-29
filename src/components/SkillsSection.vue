<template>
  <div class="bg-black text-white h-screen flex flex-col items-center justify-start p-6 overflow-hidden">
    <h1 class="text-3xl font-bold text-blue-400 mb-4">Tech Breakout 🎮</h1>
    <canvas ref="canvas" width="600" height="400" class="border border-blue-300"></canvas>

    <div class="mt-4 text-lg">
      ניקוד: <span class="text-green-400 font-bold">{{ score }}</span>
    </div>

    <div class="train-container mt-6 overflow-hidden w-full relative">
      <div class="train" :class="{ 'move-train': trainReady }">
        <div v-for="tech in allTechs" :key="tech" class="tech-box">
          {{ tech }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
const score = ref(0)
const allTechs = ref<string[]>([])
const trainReady = computed(() => allTechs.value.length >= techPool.length)

type Brick = {
  x: number
  y: number
  tech: string
  category: string
  hit: boolean
  color: string
}

const techPool: Brick[] = [
  { tech: 'React', category: 'Frontend', x: 0, y: 0, hit: false, color: '#60A5FA' },
  { tech: 'Vue.js', category: 'Frontend', x: 0, y: 0, hit: false, color: '#34D399' },
  { tech: 'NestJS', category: 'Backend', x: 0, y: 0, hit: false, color: '#F87171' },
  { tech: 'Docker', category: 'Tools & Tech', x: 0, y: 0, hit: false, color: '#FBBF24' },
  { tech: 'MongoDB', category: 'Backend', x: 0, y: 0, hit: false, color: '#10B981' },
  { tech: 'TypeScript', category: 'Frontend', x: 0, y: 0, hit: false, color: '#A78BFA' },
]

const bricks: Brick[] = []
const drops: { text: string; x: number; y: number; category: string }[] = []

let ballColor = '#ffffff'

onMounted(() => {
  if (!canvas.value) return
  const ctx = canvas.value.getContext('2d')!
  const cw = canvas.value.width
  const ch = canvas.value.height

  const rows = 2, cols = 3, bw = 100, bh = 30
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c
      if (i < techPool.length) {
        const brick = { ...techPool[i] }
        brick.x = 60 + c * (bw + 20)
        brick.y = 50 + r * (bh + 60)
        bricks.push(brick)
      }
    }
  }

  let ballX = cw / 2
  let ballY = ch - 30
  let ballDX = 3.5
  let ballDY = -3.5
  const ballR = 14

  const paddleW = 100
  const paddleH = 10
  let paddleX = (cw - paddleW) / 2

  canvas.value.addEventListener('mousemove', (e) => {
    const rect = canvas.value!.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    paddleX = mouseX - paddleW / 2
  })

  function drawDrops() {
    drops.forEach((d, i) => {
      ctx.fillStyle = 'white'
      ctx.font = '14px Arial'
      ctx.fillText(d.text, d.x, d.y)
      d.y += 2
      if (d.y > ch - 50) {
        if (!allTechs.value.includes(d.text)) allTechs.value.push(d.text)
        drops.splice(i, 1)
      }
    })
  }

  function draw() {
    ctx.clearRect(0, 0, cw, ch)

    // Draw bricks
    bricks.forEach((b) => {
      if (!b.hit) {
        ctx.beginPath()
        ctx.arc(b.x + bw / 2, b.y + bh / 2, 20, 0, Math.PI * 2)
        ctx.fillStyle = b.color
        ctx.fill()
        ctx.strokeStyle = 'white'
        ctx.stroke()
        ctx.closePath()
      }
    })

    // Draw ball
    ctx.beginPath()
    ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2)
    ctx.fillStyle = ballColor
    ctx.fill()
    ctx.strokeStyle = 'white'
    ctx.stroke()
    ctx.closePath()

    // Draw paddle
    ctx.fillStyle = '#22D3EE'
    ctx.fillRect(paddleX, ch - paddleH, paddleW, paddleH)

    drawDrops()

    // Ball movement
    ballX += ballDX
    ballY += ballDY

    if (ballX + ballR > cw || ballX - ballR < 0) ballDX *= -1
    if (ballY - ballR < 0) ballDY *= -1
    if (ballY + ballR > ch) {
      ballX = cw / 2
      ballY = ch - 30
      ballDY = -3.5
    }

    // Paddle collision
    if (
      ballY + ballR > ch - paddleH &&
      ballX > paddleX &&
      ballX < paddleX + paddleW
    ) {
      ballDY = -ballDY
    }

    // Brick collision
    bricks.forEach((b) => {
      if (
        !b.hit &&
        ballX > b.x && ballX < b.x + bw &&
        ballY - ballR < b.y + bh && ballY + ballR > b.y
      ) {
        b.hit = true
        ballDY = -ballDY
        score.value += 10
        ballColor = b.color
        drops.push({ text: b.tech, x: b.x + 30, y: b.y + 30, category: b.category })
      }
    })

    requestAnimationFrame(draw)
  }

  draw()
})
</script>

<style scoped>
canvas {
  background-color: #1f2937;
  border-radius: 8px;
}

.train-container {
  height: 60px;
}

.train {
  display: flex;
  transition: transform 4s ease-in-out;
  gap: 10px;
  padding-left: 20px;
}

.tech-box {
  min-width: 100px;
  background: linear-gradient(to right, #4f46e5, #22d3ee);
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  white-space: nowrap;
}

.move-train {
  transform: translateX(-100%);
}
</style>
