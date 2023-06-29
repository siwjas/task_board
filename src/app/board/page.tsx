import { SponsorButton } from '@/components/SponsorButton'
import styles from './board.module.scss'
import {
  FiPlus,
  FiCalendar,
  FiTrash,
  FiEdit,
  FiClock
} from 'react-icons/fi'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cadastre suas tarefas',
  description: 'Organize-se com essa ferramenta fantástica.'
}

export default function Board() {
  return (
    <div className={styles.container}>
      <span className={styles.x}>.</span>
      <div className={styles.content}>
        <div className={styles.contentForm}>
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
              <span className={styles.taskItem}>
                <p>Aprender a criar projetos usanto NextJs aplicando firebase como back.</p>
              </span>

              <div className={styles.actions}>
                <div className={styles.taskInfo}>
                  <div>
                    <time>
                      <FiCalendar size={20} color='ffb800' />
                      25 de Julho de 2023
                    </time>
                  </div>
                  <button className={styles.edit}>
                    <FiEdit size={20} />
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
                    <FiEdit size={20} />
                  </button>
                </div>
                <button className={styles.delete}>
                  <FiTrash size={20} />
                </button>
              </div>
            </article>
          </section>
        </div>

        <div className={styles.vipContainer}>
          <h3>Obrigado por apoiar esse projeto.</h3>
          <div className={styles.timer}>
            <FiClock size={28} />
            <time>
              Ultima doação foi a 3 dias.
            </time>
          </div>
        </div>
        <SponsorButton isDonator={false} />
      </div>
    </div>
  )
}