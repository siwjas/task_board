import { FiLogOut, FiGithub } from 'react-icons/fi'
import Image from 'next/image'
import avatar from '../../../public/avatar.jpeg'
import styles from './styles.module.scss'
import { useState } from 'react'

export default function SignInButton() {
  const [logIn, setLogIn] = useState(true)
  const name = 'Wellington'
  const userAvatar = <Image src={avatar} alt='Foto de perfil'/>

  return logIn ? (
    <>
      <button
        className={styles.btnLogedIn}
        type='button'
      >
        {userAvatar}

        Olá {name}
        <FiLogOut
          size={28}
          onClick={() => setLogIn(false)}       
        />
      </button>
    </>
  ) : (
    <>
      <button
        className={styles.btn}
        onClick={() => setLogIn(true)}
        type='button'
      >
        <FiGithub size={28} />
        Entrar com github
      </button>
    </>
  )
}