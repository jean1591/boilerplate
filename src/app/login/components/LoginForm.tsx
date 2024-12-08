'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (result?.error) {
        setError('Invalid email or password')
      } else {
        router.push('/dashboard')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="rounded-lg border border-gray-700 bg-gray-800">
      <h1 className="border-b border-gray-700 p-6 text-xl font-bold text-gray-100">
        Login
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 p-6">
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full rounded-md border border-gray-700 bg-gray-900 p-2 text-gray-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"

        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full rounded-md border border-gray-700 bg-gray-900 p-2 text-gray-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"

        />

        <button
          type="submit"
          className="w-full rounded-md border border-gray-500 bg-gray-700 px-4 py-2 text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? 'Logging in...' : 'Login'}
          </button>
      </form>
    </div>
  )
}
