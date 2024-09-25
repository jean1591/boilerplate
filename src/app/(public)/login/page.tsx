import { LoginForm } from './components/LoginForm'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-md bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Login</h1>
        <LoginForm />
      </div>
    </div>
  )
}
