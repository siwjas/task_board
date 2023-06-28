'use client'
import styles from './button.module.scss'
import { useRouter } from 'next/navigation'

export function SponsorButton({isDonator}: any) {
  const router = useRouter()

  return isDonator ? (
    <></>
  ) : (
    <>
      <span className={styles.donationBtn}>
        <button
          type='button'
          onClick={() => router.push('/board/donate')}
        >Apoiar</button>
      </span>
    </>
  )
}