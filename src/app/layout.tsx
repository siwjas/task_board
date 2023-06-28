import { Ubuntu } from 'next/font/google'
import './styles/global.scss'
import { Header } from '@/components/Header'

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})

export const metadata = {
  title: 'Task Board - Organizando suas tarefas!',
  description: 'A nice App for organize your tasks!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className={ubuntu.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
