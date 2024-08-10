export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-4 lg:px-0">
      {children}
    </div>
  )
}
