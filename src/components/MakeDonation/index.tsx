import Image from 'next/image'
import rocket from '../../../public/rocket.svg'
import styles from './styles.module.scss'
import Sponsors from '@/components/Sponsors'

export default function MakeDonation() {
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