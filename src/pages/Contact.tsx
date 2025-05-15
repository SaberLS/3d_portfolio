import { Suspense, useState, type ChangeEvent } from 'react'
import emailjs from '@emailjs/browser'
import Fox from '../models/Fox'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'

function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState<'idle' | 'walk' | 'hit'>('idle')

  const { alert, showAlert, hideAlert } = useAlert()

  const handleFocus = () => {
    setCurrentAnimation('walk')
  }

  const handleBlur = () => {
    setCurrentAnimation('idle')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Me',
        to_email: 'example@gmail.com',
        from_email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_KEY,
    ).then(() => {
      console.log('success')
      showAlert({ text: 'Message sent successfully!', type: 'success' })
      setForm({ name: '', email: '', message: '' })
    }).catch((err) => {
      showAlert({ text: err, type: 'danger' })
    }).finally(() => {
      setTimeout(() => {
        setCurrentAnimation('idle')
        hideAlert()
      }, 3000)
      setIsLoading(false)
    })
  }

  return (
    <>
      {alert.show ? <Alert {...alert} /> : ''}
      <section className="flex h-[80vh] flex-row justify-center flex-wrap">
        <div className="w-screen flex items-end justify-center m-auto">
          <h1 className="mt-5 text-center font-extrabold text-blue-700/80 text-4xl flex flex-col">Get in Touch</h1>
        </div>
        <form onSubmit={handleSubmit} className="w-100 flex flex-col items-center gap-7">
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <textarea
              rows={4}
              name="message"
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="w-100  h-100">
          <Canvas
            camera={{
              position: [0, 0.5, 5],
              fov: 75,
            }}
          >
            <Suspense fallback={<Loader />}>
              <directionalLight intensity={5} />
              <ambientLight intensity={2} />
              <Fox
                currentAnimation={currentAnimation}
                position={[0, 1, 0]}
                rotation={[0, -0.5, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </>
  )
}

export default Contact
