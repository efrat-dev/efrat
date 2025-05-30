<template>
  <div ref="container" class="absolute inset-0 -z-10" />
</template>

<script lang="ts" setup>
import * as THREE from 'three'
import { onMounted, onUnmounted, ref } from 'vue'

const container = ref<HTMLDivElement | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let stars: THREE.Points
let animationId: number

const initGalaxy = () => {
  const width = window.innerWidth
  const height = window.innerHeight

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(width, height)
  container.value?.appendChild(renderer.domElement)

  // צור נקודות כוכבים
  const starGeometry = new THREE.BufferGeometry()
  const starCount = 2000
  const positions = []

  for (let i = 0; i < starCount; i++) {
    const x = (Math.random() - 0.5) * 100
    const y = (Math.random() - 0.5) * 100
    const z = -Math.random() * 200
    positions.push(x, y, z)
  }

  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))

  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.7,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  })

  stars = new THREE.Points(starGeometry, starMaterial)
  scene.add(stars)

  window.addEventListener('resize', onResize)
  document.addEventListener('mousemove', onMouseMove)

  animate()
}

const onResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

let mouseX = 0
let mouseY = 0

const onMouseMove = (e: MouseEvent) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1
}

const animate = () => {
  stars.rotation.y += 0.0008
  stars.rotation.x += 0.0003

  // תזוזה עדינה לפי עכבר
  camera.position.x += (mouseX * 5 - camera.position.x) * 0.05
  camera.position.y += (mouseY * 5 - camera.position.y) * 0.05
  camera.lookAt(scene.position)

  renderer.render(scene, camera)
  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  initGalaxy()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', onResize)
  document.removeEventListener('mousemove', onMouseMove)
  container.value?.removeChild(renderer.domElement)
})
</script>

<style scoped>
canvas {
  display: block;
}
</style>
