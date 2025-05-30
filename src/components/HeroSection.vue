<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-center px-6 overflow-hidden"
    data-aos="fade-up"
  >
    <!-- רקע כוכבים Canvas -->
    <div class="absolute inset-0 -z-10 bg-black">
      <canvas id="stars" class="w-full h-full block"></canvas>
    </div>

    <!-- כותרת עם אפקטים -->
    <h1 class="relative text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-move mb-4">
      <span class="absolute inset-0 rounded-lg border-4 border-blue-500 opacity-25 animate-pulse"></span>
      EFRAT BDIL
    </h1>

    <h2 class="text-xl md:text-3xl text-gray-300 mb-6">FULL STACK DEVELOPER</h2>

    <p class="text-gray-400 max-w-xl mx-auto">
      Motivated Full Stack Developer with a passion for self-learning, clean code, and meaningful impact.
      I build software that combines logic and creativity to deliver real-world solutions.
    </p>

    <!-- כפתורי קישורים -->
    <div class="mt-10 flex flex-wrap justify-center gap-4 text-sm z-10">
      <a href="mailto:efrat.developer@gmail.com"
         class="relative px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <span class="relative z-10">Email Me</span>
        <span class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-25 blur-lg"></span>
      </a>
      <a href="#" class="text-blue-400 underline">Portfolio</a>
      <a href="#" class="text-blue-400 underline">GitHub</a>
      <a href="#" class="text-blue-400 underline">Technical Blog</a>
    </div>

    <!-- גל SVG תחתון -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] -z-10">
      <svg class="relative block w-[calc(150%+1.3px)] h-[150px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z" fill="url(#grad)" opacity="0.1"></path>
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00f0ff" />
            <stop offset="100%" stop-color="#8f00ff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('stars') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')!
  let width = canvas.width = window.innerWidth
  let height = canvas.height = window.innerHeight

  let mouseX = 0
  let mouseY = 0

  const numStars = 300
  const stars = Array.from({ length: numStars }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.5 + 0.5,
    baseR: 0,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    twinkle: Math.random() * Math.PI * 2
  }))

  const update = () => {
    stars.forEach(star => {
      star.x += star.vx
      star.y += star.vy
      star.twinkle += 0.05
      star.r = star.baseR + Math.sin(star.twinkle) * 0.5

      // חזור לגבולות המסך
      if (star.x < 0 || star.x > width) star.vx *= -1
      if (star.y < 0 || star.y > height) star.vy *= -1
    })
  }

  const draw = () => {
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#fff'
    ctx.shadowBlur = 10
    ctx.shadowColor = '#00ffff'

    stars.forEach(star => {
      ctx.beginPath()
      ctx.arc(
        star.x + (mouseX - width / 2) * 0.002,
        star.y + (mouseY - height / 2) * 0.002,
        Math.abs(star.r),
        0,
        Math.PI * 2
      )
      ctx.fill()
    })
  }

  const animate = () => {
    update()
    draw()
    requestAnimationFrame(animate)
  }

  animate()

  const onResize = () => {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
  }

  const onMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  window.addEventListener('resize', onResize)
  window.addEventListener('mousemove', onMouseMove)

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
    window.removeEventListener('mousemove', onMouseMove)
  })
})
</script>

<style scoped>

@keyframes gradient-move {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.animate-gradient-move {
  background-size: 200% 200%;
  animation: gradient-move 5s ease infinite;
}
</style>
