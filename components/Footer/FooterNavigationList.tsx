import { PRODUCTS_PER_PAGE } from '@/constants'
import { isRouteActive } from '@/utils'
import { useRouter } from 'next/router'
import { FooterNavigationItem } from './FooterNavigationItem'

export const FooterNavigationList = () => {
  const navigation = [
    { title: 'Main', href: '/' },
    { title: 'Products CSR', href: '/products' },
    { title: 'Products SSG', href: `/products/${PRODUCTS_PER_PAGE}/0` },
    { title: 'About', href: '/about' },
  ]
  const { pathname } = useRouter()

  return (
    <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
      {navigation.map(({ title, href }) => (
        <FooterNavigationItem
          key={href}
          href={href}
          title={title}
          active={isRouteActive(pathname, href)}
        />
      ))}
    </ul>
  )
}
