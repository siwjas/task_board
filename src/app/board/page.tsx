import styles from './bord.module.scss'
import { FiPlus, FiCalendar, FiTrash, FiEdit } from 'react-icons/fi'
export default function Board() {
  return (
    <div className={styles.container}>
      <form action="">
        <input
          id='task'
          type='text'
          placeholder='Digite sua tarefa'
        />

        <button type='submit'>
          <FiPlus size={30} />
        </button>
      </form>

      <h2>Você tem 2 tarefas</h2>

      <section>
      <article className={styles.taskList}>
          <p>Aprender a criar projetos usanto NextJs aplicando firebase como back.</p>
          <div className={styles.actions}>
            <div className={styles.taskInfo}>
              <div>
                <time>
                  <FiCalendar size={20} color='ffb800' />
                  25 de Julho de 2023
                </time>
              </div>
              <button className={styles.edit}>
                <FiEdit size={20}/>
              </button>
            </div>
            <button className={styles.delete}>
              <FiTrash size={20} />
            </button>
          </div>
        </article>

        <article className={styles.taskList}>
          <p>Estudar ReactJs :: Styled Components e React Router DOM.</p>
          <div className={styles.actions}>
            <div className={styles.taskInfo}>
              <div>
                <time>
                  <FiCalendar size={20} color='ffb800' />
                  25 de Julho de 2023
                </time>
              </div>
              <button className={styles.edit}>
                <FiEdit size={20}/>
              </button>
            </div>
            <button className={styles.delete}>
              <FiTrash size={20} />
            </button>
          </div>
        </article>
      </section>
    </div>
  )
}