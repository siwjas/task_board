import Link from "next/link";
import styles from './tasks.module.scss'

export default function Tasks() {
  return(
    <div className={styles.content}>
      <h1>Lista de Tarefas</h1>
  
      <Link href={'.'}>Voltar</Link>
    </div>
    
  )
}