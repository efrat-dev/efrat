<template>
  <canvas ref="canvas" class="w-full h-full absolute inset-0 -z-10 bg-black"></canvas>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (!canvas.value) return
  const ctx = canvas.value.getContext('2d')!
  let width = canvas.value.width = window.innerWidth
  let height = canvas.value.height = window.innerHeight

  const meteors = Array.from({ length: 20 }, () => createMeteor())

  function createMeteor() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 80 + 50,
      speed: Math.random() * 4 + 2,
      angle: Math.PI / 4,
      alpha: Math.random() * 0.5 + 0.5,
      width: Math.random() * 1.5 + 0.5,
    }
  }

  function drawMeteor(meteor: any) {
    const { x, y, length, angle, width, alpha } = meteor
    const xEnd = x + Math.cos(angle) * length
    const yEnd = y + Math.sin(angle) * length

    const grad = ctx.createLinearGradient(x, y, xEnd, yEnd)
    grad.addColorStop(0, `rgba(255,255,255,${alpha})`)
    grad.addColorStop(1, `rgba(0, 255, 255, 0)`)

    ctx.strokeStyle = grad
    ctx.lineWidth = width
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(xEnd, yEnd)
    ctx.stroke()
  }

  function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'
    ctx.fillRect(0, 0, width, height)

    meteors.forEach((meteor, index) => {
      drawMeteor(meteor)
      meteor.x += Math.cos(meteor.angle) * meteor.speed
      meteor.y += Math.sin(meteor.angle) * meteor.speed

      if (meteor.x > width || meteor.y > height) {
        meteors[index] = createMeteor()
      }
    })

    requestAnimationFrame(animate)
  }

  animate()

  const onResize = () => {
    width = canvas.value!.width = window.innerWidth
    height = canvas.value!.height = window.innerHeight
  }

  window.addEventListener('resize', onResize)
  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })
})
</script>

<style scoped>
canvas {
  display: block;
}
</style>
