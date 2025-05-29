<template>
  <section
    id="about"
    class="relative py-32 px-6 bg-black text-white overflow-hidden isolate"
    data-aos="fade-up"
  >
    <!-- רקע Canvas ניאון -->
    <div class="absolute inset-0 -z-10 bg-black">
      <canvas id="neural" class="w-full h-full block"></canvas>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto text-center">
      <h2
        class="typewriter text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400 animate-gradient-move mb-8 drop-shadow-xl"
      >
        👨‍💻 Meet The Creator
      </h2>
      <p class="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
        I don’t just build code. I build <em>experiences</em>.<br />
        Clean, dynamic, and delightful. My mission? Turning lines of logic into magic.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('neural') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')!

  let width = window.innerWidth
  let height = window.innerHeight
  const dpi = window.devicePixelRatio || 1

  canvas.width = width * dpi
  canvas.height = height * dpi
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'
  ctx.scale(dpi, dpi)

  let hue = 180

  const numParticles = 130
  const particles = Array.from({ length: numParticles }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 1,
    vy: (Math.random() - 0.5) * 1,
    radius: Math.random() * 1.5 + 1
  }))

  const draw = () => {
    ctx.fillStyle = 'rgba(0,0,0,0.2)'
    ctx.fillRect(0, 0, width, height)

    hue += 0.3
    const color = `hsl(${hue % 360}, 100%, 60%)`

    particles.forEach((p, i) => {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > width) p.vx *= -1
      if (p.y < 0 || p.y > height) p.vy *= -1

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.shadowBlur = 10
      ctx.shadowColor = color
      ctx.fill()
      ctx.shadowBlur = 0

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j]
        const dx = p.x - q.x
        const dy = p.y - q.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 100})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(q.x, q.y)
          ctx.stroke()
        }
      }
    })

    requestAnimationFrame(draw)
  }

  draw()

  const handleResize = () => {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width * dpi
    canvas.height = height * dpi
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    ctx.scale(dpi, dpi)
  }

  window.addEventListener('resize', handleResize)
  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
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

.typewriter {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  animation: typing 4s steps(40, end) 1s forwards, blink 1s step-end infinite;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
