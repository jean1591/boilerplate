export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto min-h-screen max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}
