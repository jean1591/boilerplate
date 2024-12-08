import { Description } from '@headlessui/react'
import { RegisterForm } from './components/RegisterForm'

export default function RegisterPage() {
  const features = [
    {
      title: 'Feature 1',
      description: 'Description feature 1',
    },
    {
      title: 'Feature 2',
      description: 'Description feature 2',
    },
  ]

  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="hidden min-h-screen bg-slate-900 md:block">
        <div className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-4">
          <div className="mb-8 space-y-2 text-left">
            <h3 className="text-xl font-semibold">Register today !</h3>
          </div>

          <div className="space-y-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-gray-950 bg-gray-800 p-8"
              >
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-md items-center justify-center px-4">
        <RegisterForm />
      </div>
    </div>
  )
}
