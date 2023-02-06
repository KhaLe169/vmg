import '@/styles/globals.css'
import { Akshar } from '@next/font/google'

const roboto = Akshar({
  weight: '400',
  subsets: ['latin'],
})
export default function App({ Component, pageProps }) {
  return (
    <main  className={roboto.className}>
      <Component {...pageProps} />
    </main>
  ) 
}
