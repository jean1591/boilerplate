'use client'

import { login } from './actions'
import toast from 'react-hot-toast'
import { useState } from 'react'

const notify = () =>
  toast.success('Check you emails to login', { duration: 5000 })

export default function LoginPage() {
  const [email, setEmail] = useState<string>('')

  const handleLogin = () => {
    notify()

    login({ email })
  }

  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="block w-full rounded-md py-2 pl-2 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-800/25 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="bgslate-800-content textslate-800 hover:bgslate-800-content/80 w-full rounded-md px-4 py-2 text-center text-base font-semibold leading-6 shadow-sm"
        >
          Log in
        </button>
      </div>
    </div>
  )
}
