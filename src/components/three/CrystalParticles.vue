<template>
  <div ref="container" class="absolute inset-0 -z-10"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const container = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!container.value) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 50

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value.appendChild(renderer.domElement)

  const crystals: THREE.Mesh[] = []
  const geometry = new THREE.IcosahedronGeometry(2, 0)
  const material = new THREE.MeshStandardMaterial({
    color: 0x00ffff,
    roughness: 0.4,
    metalness: 0.8,
    flatShading: true,
    emissive: 0x111111,
  })

  for (let i = 0; i < 60; i++) {
    const crystal = new THREE.Mesh(geometry, material.clone())
    crystal.position.set(
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100
    )
    crystal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
    scene.add(crystal)
    crystals.push(crystal)
  }

  const light1 = new THREE.PointLight(0xffffff, 1)
  light1.position.set(50, 50, 50)
  scene.add(light1)

  const light2 = new THREE.AmbientLight(0x404040, 2)
  scene.add(light2)

  const animate = () => {
    crystals.forEach(c => {
      c.rotation.x += 0.005
      c.rotation.y += 0.007
      c.position.y += Math.sin(Date.now() * 0.001 + c.position.x) * 0.005
    })

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
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
div {
  background: transparent;
}
</style>
