'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FiLogOut, FiGithub } from 'react-icons/fi'
import Image from 'next/image'
import avatar from '../../app/assets/usr_img.png'
import styles from './styles.module.scss'

export default function SignInButton() {
  const { data: session } = useSession()

  const userAvatar = <Image 
    src={ session?.user?.image || avatar }
    priority={true} 
    width={46} 
    height={46} 
    alt='Foto de perfil'
  />

  return session ? (
    <>
      <button
        className={styles.btnLogedIn}
        type='button'
      >
        {userAvatar}

        Olá {session.user?.name}
        <FiLogOut
          size={28}
          onClick={() => signOut()}       
        />
      </button>
    </>
  ) : (
    <>
      <button
        className={styles.btn}
        onClick={() => signIn('github')}
        type='button'
      >
        <FiGithub size={28} />
        Entrar com github
      </button>
    </>
  )
}