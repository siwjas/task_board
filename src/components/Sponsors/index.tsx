import Image from "next/image"
import { FiCreditCard } from "react-icons/fi"
import avatar from '../../app/assets/avatar.jpeg'
import styles from './sponsors.module.scss'


export default function Sponsors({ isDonator }: any) {

  return isDonator ? (
    <div className={styles.donators}>
      <h3>Apoiadores:</h3>
      <div className={styles.donatorsImg}>
        <Image src={avatar} alt="Sponsor avatar" width={60} />
        <Image src={avatar} alt="Sponsor avatar" width={60} />
        <Image src={avatar} alt="Sponsor avatar" width={60} />
        <Image src={avatar} alt="Sponsor avatar" width={60} />
        <Image src={avatar} alt="Sponsor avatar" width={60} />
        <Image src={avatar} alt="Sponsor avatar" width={60} />
        <Image src={avatar} alt="Sponsor avatar" width={60} />
      </div>
    </div>
  ) : (
    <div className={styles.ctaDonators}>
      <h1>Seja um apoiador desse projeto!</h1>
      <h4>Contribua com apenas <span>R$ 5,00</span></h4>
      <p>Apareça na nossa home e tenha funcionalidades exclusivas.</p>

      <div className={styles.payButtons}>
        <button
          type="button"
          className={styles.payCash}
        >PayPal</button>
        <button
          type="button"
          className={styles.payCard}
        >
          <FiCreditCard size={18} />
        </button>
      </div>
    </div>
  )
}