import { RegisterForm } from './components/RegisterForm'

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-md bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Register</h1>
        <RegisterForm />
      </div>
    </div>
  )
}
