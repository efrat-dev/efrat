<template>
  <div
    class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black bg-opacity-80 text-white p-8 z-50 flex flex-col items-center justify-center overflow-y-auto backdrop-blur-md"
  >
    <div class="flex flex-wrap justify-center gap-8 max-w-6xl">
      <div
        v-for="(techs, category) in categorizedTechs"
        :key="category"
        class="bg-gradient-to-br from-gray-800 via-gray-900 to-black border rounded-xl shadow-lg p-6 w-72 transform transition-all duration-300 cursor-pointer relative"
        :class="{
          'border-cyan-400 ring-2 ring-cyan-300 ring-offset-2': openCategory === category,
          'border-gray-600': openCategory !== category
        }"
        @click="toggleCategory(category)"
      >
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-2xl font-bold text-cyan-300 drop-shadow-md">
            {{ category }}
          </h3>
          <span
            class="transition-transform duration-300 text-cyan-400"
            :class="{ 'rotate-90': openCategory === category }"
          >
            ▶
          </span>
        </div>

        <transition name="slide">
          <ul
            v-if="openCategory === category"
            class="space-y-2 text-sm font-mono text-cyan-100 mt-4"
          >
            <li
              v-for="tech in techs"
              :key="tech"
              class="pl-3 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-cyan-300 before:rounded-full"
            >
              {{ tech }}
            </li>
          </ul>
        </transition>
      </div>
    </div>

    <div class="text-center mt-10">
      <button
        @click="$emit('restart')"
        class="px-8 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition text-white text-lg font-semibold shadow-md hover:shadow-cyan-500/40"
      >
        🔁 משחק חדש
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  categorizedTechs: Record<string, string[]>
}>()

defineEmits<{
  (e: 'restart'): void
}>()

const openCategory = ref<string | null>(null)

function toggleCategory(category: string) {
  openCategory.value = openCategory.value === category ? null : category
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
.slide-enter-to,
.slide-leave-from {
  max-height: 500px;
  opacity: 1;
  transform: translateY(0);
}
</style>
