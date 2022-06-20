import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import {
  ListBooksDocument,
  ListBooksQuery,
  ListBooksQueryVariables,
} from '../../graphql/generated/graphql'
import { useEffect, useState } from 'react'

export const BookList = () => {
  const [data, setData] = useState<ListBooksQuery>()

  useEffect(() => {
    const getBookList = async () => {
      const { data } = (await API.graphql(
        graphqlOperation(ListBooksDocument, {
          limit: 10,
        } as ListBooksQueryVariables)
      )) as GraphQLResult<ListBooksQuery>

      setData(data)
    }

    getBookList()
  }, [])

  console.log(`data: ${JSON.stringify(data)}`)

  return <div>BookList</div>
}
