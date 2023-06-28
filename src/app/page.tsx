import styles from './home.module.scss'
import Image from 'next/image'
import { FiCheckCircle } from 'react-icons/fi'
import boardUser from '../../public/board-user.svg'
import Sponsors from '@/components/Sponsors'

export default function Home() {
  
  return (
    <main className={styles.container}>
      <Image src={boardUser} alt='Board user' width={400} />
      <section>
        <h1 className={styles.title}>
          Uma ferramenta para seu dia a dia. <br />
          Escreva, planeje e <span>organise-se <FiCheckCircle size={24} /> </span>
        </h1>
        <h3><span>100% Gratuito</span> e online!</h3>
      </section>

      <section className={styles.donators}>
        <Sponsors isDonator = {true} />
      </section>
    </main>
  )
}
