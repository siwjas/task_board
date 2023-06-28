import Image from 'next/image'
import rocket from '../../assets/rocket.svg'
import styles from './donate.module.scss'
import Sponsors from '@/components/Sponsors'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Seja um apoiador',
  description: 'Apoie esse projeto e tenha acesso a funcionalidades exclusivas.'
}

export default function Donate() {
  return (
    <>
      <section className={styles.container}>
        <Image
          src={rocket}
          alt='Rocket image'
        />

        <Sponsors isDonator={false} />
      </section>
    </>
  )
}