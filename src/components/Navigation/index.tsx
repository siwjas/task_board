'use client'
import Image from 'next/image'
import {usePathname, useRouter} from 'next/navigation'
import logo from '../../app/assets/logo.svg'
import styles from './menu.module.scss'
import Link from 'next/link'
import SignInButton from '../SignIngButton'

export function Navigation({ navLinks }: {navLinks: any}) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <>
      <nav>
        <div className={styles.menu}>
          <span>
            <Image
              src={logo}
              alt='Logo Meu board'
              height={60}
              onClick={() => router.push('/')}
            />          
          </span>

          <ul>
            {
              navLinks.map((link: any, i: any) => {
                const isActive = pathname.endsWith(link.href) ? styles.active : ''

                return(
                  <li key={i}>
                    <Link 
                      href={link.href}
                      className={isActive}
                    >{link.name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <SignInButton />
      </nav>
    </>
  )
}