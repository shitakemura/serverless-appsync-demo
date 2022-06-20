import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import {
  ListBooksDocument,
  ListBooksQuery,
  ListBooksQueryVariables,
} from '../../graphql/generated/graphql'
import { useEffect, useState } from 'react'
import { BookItem } from './BookItem'

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

  if (!data?.listBooks.books) return null

  return (
    <div>
      {data.listBooks.books.map((book) => {
        if (book) return <BookItem key={book.bookId} book={book} />
      })}
    </div>
  )
}
