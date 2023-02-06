import '@/styles/globals.css'
import { Akshar } from '@next/font/google' 
import { SessionProvider } from 'next-auth/react';

const roboto = Akshar({
  weight: '400',
  subsets: ['latin'],
})
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
    <main  className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider> 
  ) 
}
