import styles from './home.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <div>
       <h1 className={styles.title}>Phojeto em <span>NextJS</span></h1>
       <p>A nice App for organize your tasks!</p>
      </div>
    </main>
  )
}
