<template>
  <section id="contact" class="py-20 px-6 bg-gray-900 text-white" data-aos="fade-up">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-blue-400 mb-6">צור קשר</h2>
      <p class="text-lg text-gray-300 mb-8">מלא.י את הטופס ואחזור אליך בהקדם</p>

      <form @submit.prevent="sendEmail" ref="formRef" class="flex flex-col gap-4 max-w-xl mx-auto text-left">
        <input v-model="form.name" type="text" name="user_name" placeholder="שם מלא" required
          class="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400" />
        <input v-model="form.email" type="email" name="user_email" placeholder="אימייל" required
          class="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400" />
        <textarea v-model="form.message" name="message" placeholder="הודעה" required rows="5"
          class="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400"></textarea>
        <button type="submit"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
          שלח
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
// import emailjs from '@emailjs/browser'

const formRef = ref<HTMLFormElement | null>(null)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

function sendEmail() {
  if (!formRef.value) return

  emailjs
    .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.value, 'YOUR_PUBLIC_KEY')
    .then(() => {
      alert('ההודעה נשלחה בהצלחה!')
      form.name = ''
      form.email = ''
      form.message = ''
    })
    .catch((error) => {
      alert('אירעה שגיאה בשליחה: ' + error.text)
    })
}
</script>
