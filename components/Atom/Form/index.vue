<template>
  <div class="contact-form">
    <form v-if="!open" class="form" @submit.prevent="sendEmail">
      <AtomFormInput
        v-model="formDate.name"
        :label="$t(`${T}.name`)"
        :required="true"
      />
      <AtomFormInput
        v-model="formDate.email"
        :label="$t(`${T}.email`)"
        type="email"
        :required="true"
      />
      <AtomFormInput
        v-model="formDate.message"
        :label="$t(`${T}.message`)"
        type="textarea"
        :required="true"
      />
      <div class="center">
        <p v-show="errorSend" class="error">
          {{ $t(`${T}.error`) }} oscar.moises350@gmail.com
        </p>
        <AtomFormSend
          :class="[{ disabled: sending }]"
          :disabled="sending"
          :text="sending? $t(`${T}.sending`) : $t(`${T}.send`)"
        />
      </div>
    </form>
    <div v-else class="message-after">
      <p v-html="$t(`${T}.success`)" />
    </div>
  </div>
</template>

<script setup lang="ts">
const T = 'contacts.form'
const config = useRuntimeConfig()
const sending = ref(false)
const open = ref(false)
const errorSend = ref(false)

const formDate = reactive({
  name: '',
  email: '',
  message: '',
})

const sendEmail = async (e: Event) => {
  e.preventDefault()
  sending.value = true

  try {
    if (formDate.name && formDate.email && formDate.message) {
      const sender = {
        email: config.public.BREVO_EMAIL_SENDER,
        name: formDate.name,
      }

      const subject = `Nuevo mensaje de ${formDate.name} - ${formDate.email}, desde el formulario del portafolio`

      const message = `
        <h4><strong>Nombre:</strong> ${formDate.name}</h4> 
        <h4><strong>Email:</strong> ${formDate.email}</h4> 
        <p><strong>Mensaje:</strong> ${formDate.message}</p>
      `

      const result = await useSendEmail(sender, message, subject, config.public.BREVO_EMAIL_TO)

      if (result.status._value === 'success') {
        open.value = !open.value
        sending.value = false
      }
      else {
        errorSend.value = true
        sending.value = false
      }
    }
    else {
      sending.value = false
    }
  }
  catch (error) {
    sending.value = false
    errorSend.value = true
    open.value = false
  }
}

</script>

<style lang="scss">
.contact-form {
  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 430px;
    padding: 32px 20px;
    margin-bottom: 42px;
    background-color: var(--bg-form);
    border: 1px solid var(--form-border);
    border-radius: 8px;
    box-shadow: 0 0 14px 5px rgb(0 0 0 / 10%);

    .flex {
      display: flex;
      gap: 6px;
      width: 100%;
    }

    .center {
      margin: 0 auto;

      .disabled {
        cursor: not-allowed;
        background-color: #333;

        &:hover {
          background-color: #333;
        }
      }

      .error {
        margin-bottom: 16px;
        text-align: center;
      }
    }

    @media screen and (min-width: 992px) {
      width: 430px;
      max-width: initial;
    }
  }

  .message-after {
    padding: 26px 20px;
    color: var(--text-color);
    background-color: var(--bg-secondary);
    border: 1px solid var(--form-border);
    border-radius: 20px;

    .highlight {
      font-weight: 600;
      color: var(--primary-color);
    }

    @media screen and (min-width: 992px) {
      width: 430px;
      font-size: 16px;
      text-wrap: balance;
    }
  }
}
</style>
