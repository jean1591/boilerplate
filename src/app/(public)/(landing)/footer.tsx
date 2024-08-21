import Link from 'next/link'

const navigation = [
  { name: 'Features', href: '/#features' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Privacy policy', href: '/privacy-policy' },
  { name: 'Terms of service', href: '/tos' },
]

export const Footer = () => {
  return (
    <footer className="mt-24 bg-green-900 text-white md:mt-32">
      <div className="mx-auto w-full overflow-hidden px-4 py-8 md:py-12 lg:max-w-5xl">
        <nav
          className="-mb-8 columns-2 md:flex md:justify-center md:space-x-12"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="pb-8">
              <Link
                href={item.href}
                className="text-sm leading-6 hover:text-slate-300"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-12 flex items-center justify-center gap-x-1 text-sm">
          <p>Made with ❤️ by</p>
          <Link href="https://jeanrobertou.com" target="_blank">
            Jean Robertou
          </Link>
        </div>
      </div>
    </footer>
  )
}
