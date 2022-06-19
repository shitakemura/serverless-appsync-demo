import type { NextPage } from 'next'

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const App: NextPage = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )
}

export default App
