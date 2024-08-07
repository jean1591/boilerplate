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
              className="pl-2 block w-full text-primary-content rounded-md py-2 shadow-sm sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full text-center rounded-md bg-primary-content hover:bg-primary-content/80 px-4 py-2 text-sm font-semibold leading-6 text-primary shadow-sm"
        >
          Log in
        </button>
      </div>
    </div>
  );
}
