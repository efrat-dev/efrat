<template>
  <div
    class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-black bg-opacity-80 text-white p-8 z-50 flex flex-col items-center justify-center overflow-y-auto backdrop-blur-md"
  >
    <div class="flex flex-wrap justify-center gap-6">
      <div
        v-for="(techs, category) in categorizedTechs"
        :key="category"
        class="bg-gray-800 rounded-lg shadow-md p-4 w-64 border border-blue-500"
      >
        <h3 class="text-xl font-semibold mb-2 text-blue-300 text-center">
          {{ category }}
        </h3>
        <ul class="list-disc list-inside space-y-1 text-sm">
          <li v-for="tech in techs" :key="tech">{{ tech }}</li>
        </ul>
      </div>
    </div>

    <div class="text-center mt-8">
      <button
        @click="$emit('restart')"
        class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        🔁 משחק חדש
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  categorizedTechs: Record<string, string[]>
}>()

defineEmits<{
  (e: 'restart'): void
}>()
</script>

<style>
.tech-box {
  min-width: 100px;
  background: linear-gradient(to right, #4f46e5, #22d3ee);
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  white-space: nowrap;
}
</style>
