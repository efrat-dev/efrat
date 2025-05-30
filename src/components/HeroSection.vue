<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black"
    data-aos="fade-up"
  >
    <!-- סצנת Three.js -->
    <div ref="container" class="absolute inset-0 -z-10"></div>

    <!-- תוכן עליון -->
    <h1 class="relative text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-move mb-4">
      EFRAT BDIL
    </h1>

    <h2 class="text-xl md:text-3xl text-gray-300 mb-6">FULL STACK DEVELOPER</h2>

    <p class="text-gray-400 max-w-xl mx-auto">
      Motivated Full Stack Developer with a passion for self-learning, clean code, and meaningful impact.
      I build software that combines logic and creativity to deliver real-world solutions.
    </p>

    <!-- קישורים -->
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
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const container = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!container.value) return

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(0, 1.5, 4)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.value.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 1, 0)
  controls.update()

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5)
  scene.add(light)

  const loader = new GLTFLoader()
  let mixer: THREE.AnimationMixer

loader.load(
  'https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb',
  (gltf) => {
    const model = gltf.scene

    // פתרון 1: מיקום נמוך יותר וסקייל מתאים
    model.position.set(0, -1, 0) // הנמכה של הדגם
    model.scale.set(1.2, 1.2, 1.2) // הגדלה קלה

    scene.add(model)

    // אנימציות
    mixer = new THREE.AnimationMixer(model)
    gltf.animations.forEach((clip) => mixer.clipAction(clip).play())
  }
)

  const clock = new THREE.Clock()

  const animate = () => {
    requestAnimationFrame(animate)
    const delta = clock.getDelta()
    if (mixer) mixer.update(delta)
    renderer.render(scene, camera)
  }

  animate()

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('resize', onResize)
  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
    renderer.dispose()
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
