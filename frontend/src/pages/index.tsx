import type { NextPage } from 'next'

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import {
  GetBookByIdDocument,
  GetBookByIdQuery,
  GetBookByIdQueryVariables,
} from '../graphql/generated/graphql'
import { useState } from 'react'

const App: NextPage = () => {
  const [data, setData] = useState<GetBookByIdQuery>()

  const getBook = async () => {
    const { data } = (await API.graphql(
      graphqlOperation(GetBookByIdDocument, {
        id: 'd84034c8-7b58-473c-8b3d-26c6987e16ce',
      } as GetBookByIdQueryVariables)
    )) as GraphQLResult<GetBookByIdQuery>

    setData(data)
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <section>
            <button onClick={getBook}>Get Book</button>
          </section>
          <hr />
          {data?.getBookById && (
            <article>
              <h3>{data?.getBookById.title}</h3>
              <p>{data?.getBookById.description}</p>
              <p>{data?.getBookById.author}</p>
              <p>{data?.getBookById.price}</p>
            </article>
          )}
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )
}

export default App
