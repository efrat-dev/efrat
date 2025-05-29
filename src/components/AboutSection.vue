<template>
  <section
    id="about"
    class="relative py-32 px-6 bg-black text-white overflow-hidden isolate"
    data-aos="fade-up"
  >
    <!-- רקע חלקיקים -->
<!-- רקע Matrix-style -->
<div class="absolute inset-0 -z-10 bg-black">
  <canvas id="neural" class="w-full h-full"></canvas>
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
  const canvas = document.getElementById('neural') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')!
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const neurons = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 1,
    vy: (Math.random() - 0.5) * 1
  }))

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < neurons.length; i++) {
      const n = neurons[i]
      n.x += n.vx
      n.y += n.vy

      if (n.x < 0 || n.x > canvas.width) n.vx *= -1
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1

      ctx.beginPath()
      ctx.arc(n.x, n.y, 2, 0, Math.PI * 2)
      ctx.fillStyle = '#00ffff'
      ctx.fill()

      for (let j = i + 1; j < neurons.length; j++) {
        const m = neurons[j]
        const dx = n.x - m.x
        const dy = n.y - m.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          ctx.strokeStyle = `rgba(0, 255, 255, ${1 - dist / 100})`
          ctx.beginPath()
          ctx.moveTo(n.x, n.y)
          ctx.lineTo(m.x, m.y)
          ctx.stroke()
        }
      }
    }
    requestAnimationFrame(draw)
  }

  draw()
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

       
