<template>
  <canvas
    ref="canvas"
    class="canvas w-full h-full rounded-lg shadow-2xl border border-blue-500 bg-gradient-to-br from-gray-800 to-gray-900"
  />
</template>

<script lang="ts" setup>
import { useBreakoutGame } from './gameHooks/useBreakoutGame'

const { canvas, score, gameOver, categorizedTechs, restartGame, forceEndGame } = useBreakoutGame()

defineExpose({ score, gameOver, categorizedTechs, restartGame, forceEndGame })
</script>

<style scoped>
canvas {
  background-color: #1f2937;
  border-radius: 8px;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
