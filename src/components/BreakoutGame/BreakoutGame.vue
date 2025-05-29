<template>
  <div
    class="bg-black text-white h-screen flex flex-col items-center justify-start p-6 overflow-hidden relative"
  >
    <h1 class="text-3xl font-bold text-blue-400 mb-4">Tech Breakout 🎮</h1>

    <BreakoutCanvas ref="canvasRef" />

    <div class="mt-4">
      <button
        @click="canvasRef?.forceEndGame()"
        class="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition font-semibold"
      >
        ⛔ סיים משחק
      </button>
    </div>

    <GameOverOverlay
      v-if="canvasRef?.gameOver"
      :categorized-techs="canvasRef?.categorizedTechs"
      @restart="canvasRef?.restartGame()"
    />

    <div class="mt-4 text-lg">
      ניקוד: <span class="text-green-400 font-bold">{{ canvasRef?.score }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import GameOverOverlay from './GameOverOverlay.vue'
import BreakoutCanvas from './BreakoutCanvas.vue'

const canvasRef = ref<InstanceType<typeof BreakoutCanvas> | null>(null)
</script>
