'use client'

import { bgGradient, buttonHoverTransition } from '@/app/design/constants'

import { classNames } from '@/utils/classNames'
import { login } from './actions'
import { useState } from 'react'

// Add logout button
export default function LoginPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const isDisabled = email === '' || password === ''

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your {/* CHANGE HERE: use company name */}
          <span className={classNames(bgGradient, 'p-1 text-white')}>
            "[COMPANY NAME]"
          </span>{' '}
          account
        </h2>
      </div>

      <div className="mt-8 space-y-8">
        <div className="space-y-4">
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
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                className="block w-full rounded-md py-2 pl-2 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-800/25 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={(event) => setPassword(event.target.value)}
                className="block w-full rounded-md py-2 pl-2 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-800/25 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <button
          disabled={isDisabled}
          onClick={() => login({ email, password })}
          className={classNames(
            isDisabled
              ? 'bg-slate-200 text-slate-800'
              : classNames(bgGradient, 'text-white'),
            buttonHoverTransition,
            'w-full rounded-md px-4 py-2 text-center text-base font-semibold leading-6 shadow-lg hover:opacity-75 hover:shadow-none'
          )}
        >
          Log in
        </button>

        <div>
          <p className="mt-4 text-sm font-medium">
            If you don't have an account, one will be automatically created for
            you
          </p>
        </div>
      </div>
    </div>
  )
}
