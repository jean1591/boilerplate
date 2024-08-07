"use client";

import { FormEvent, useState } from "react";

import { login } from "./actions";

// TODO: display message to check emails after login
export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login({ email });
    setSuccess(true);
  };

  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <form className="mt-12 space-y-8" onSubmit={(e) => handleLogin(e)}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          className="flex w-full justify-center rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          type="submit"
        >
          Log in
        </button>
      </form>

      {/* TODO: use toast instead ? */}
      {success && (
        <div className="mt-12 block w-full">
          <p className="bg-green-300 text-green-600 rounded-md py-2 px-4 text-wrap">
            An email has been sent to your email address
          </p>
        </div>
      )}
    </div>
  );
}
