import { useFetch, useRuntimeConfig } from '#app'

interface Sender {
  email: string
  name: string
}

export default async function sendMailWork (sender: Sender, message: string, subject: string, receiver: string) {
  const config = useRuntimeConfig()

  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    'api-key': config.public.BREVO_API_KEY,
  }

  try {
    const response = await useFetch(config.public.BREVO_URL, {
      method: 'POST',
      headers,
      body: {
        to: [
          {
            email: receiver,
          },
        ],
        htmlContent: message,
        subject,
        sender: {
          email: `${sender.email}`,
          name: `${sender.name}`,
        },
      },
    })

    return response
  }
  catch (error) {
    return false
  }
}
