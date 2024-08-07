export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 lg:px-0 mx-auto max-w-3xl min-h-screen flex justify-center items-center">
      {children}
    </div>
  );
}
