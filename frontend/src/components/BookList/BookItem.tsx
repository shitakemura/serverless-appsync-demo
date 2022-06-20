import { Book } from '../../graphql/generated/graphql'

type Props = {
  book: Omit<Book, 'createdAt' | 'updatedAt'>
}

export const BookItem = ({ book }: Props) => {
  const { title, description } = book
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}
