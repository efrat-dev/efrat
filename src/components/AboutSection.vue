<template>
  <section
    id="about"
    class="relative py-32 px-6 bg-black text-white overflow-hidden isolate"
    data-aos="fade-up"
  >
    <!-- רקע חלקיקים -->
    <div class="absolute inset-0 -z-10">
      <canvas id="particles" class="w-full h-full"></canvas>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto text-center">
      <!-- כותרת עם אפקט הקלדה -->
      <h2 class="typewriter text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400 animate-gradient-move mb-8 drop-shadow-xl">
        👩‍💻 Meet The Creator
      </h2>

      <!-- טקסט רגיל ללא אנימציה -->
      <p class="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
        I don’t just build code. I build <em>experiences</em>.<br>
        Clean, dynamic, and delightful. My mission? Turning lines of logic          into magic that real people can feel, use, and love.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('particles') as HTMLCanvasElement
  if (!canvas) return

  const ctx = canvas.getContext('2d')!
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles: { x: number; y: number; dx: number; dy: number; r: number }[] = []

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
      r: Math.random() * 2 + 1
    })
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const p of particles) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.fill()
      p.x += p.dx
      p.y += p.dy
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1
    }
    requestAnimationFrame(animate)
  }

  animate()
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
  animation: gradient-move 4s ease infinite;
}

/* אנימציית הקלדה רק לכותרת */
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

       
