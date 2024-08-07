"use client";

import { login } from "./actions";
import toast from "react-hot-toast";
import { useState } from "react";

const notify = () =>
  toast.success("Check you emails to login", { duration: 5000 });

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");

  const handleLogin = () => {
    notify();

    login({ email });
  };

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
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="pl-2 block w-full text-primary-content rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="flex w-full justify-center rounded-md bg-primary-content px-3 py-1.5 text-sm font-semibold leading-6 text-primary shadow-sm hover:bg-primary-content/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Log in
        </button>
      </div>
    </div>
  );
}
