import '@/styles/globals.css'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  // return (
  //   <ClerkProvider {...pageProps}>
  //     <SignedIn>
  //       <Component {...pageProps} />
  //     </SignedIn>
  //     <SignedOut>
  //       <RedirectToSignIn />
  //     </SignedOut>
  //   </ClerkProvider>
  // )

  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default MyApp;
