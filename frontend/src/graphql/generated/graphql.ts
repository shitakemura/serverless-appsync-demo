import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  AWSDateTime: any
  AWSEmail: any
  AWSIPAddress: any
  AWSJSON: any
  AWSPhone: any
  AWSTime: any
  AWSTimestamp: any
  AWSURL: any
  BigInt: any
  Double: any
}

export type Book = {
  author: Scalars['String']
  bookId: Scalars['ID']
  createdAt: Scalars['AWSDateTime']
  description?: Maybe<Scalars['String']>
  imageUrl?: Maybe<Scalars['AWSURL']>
  price: Scalars['Float']
  title: Scalars['String']
  updatedAt: Scalars['AWSDateTime']
}

export type BookInput = {
  author: Scalars['String']
  description?: InputMaybe<Scalars['String']>
  imageUrl?: InputMaybe<Scalars['AWSURL']>
  price: Scalars['Float']
  title: Scalars['String']
}

export type BooksPage = {
  books?: Maybe<Array<Maybe<Book>>>
  nextToken?: Maybe<Scalars['String']>
}

export type Mutation = {
  createBook: Book
  createOrder: Scalars['Boolean']
}

export type MutationCreateBookArgs = {
  newBook?: InputMaybe<BookInput>
}

export type MutationCreateOrderArgs = {
  newOrder?: InputMaybe<OrderInput>
}

export type OrderInput = {
  items?: InputMaybe<Array<InputMaybe<OrderItemInput>>>
}

export type OrderItem = {
  book: Book
  orderId: Scalars['ID']
  quantity: Scalars['Int']
  userId: Scalars['ID']
}

export type OrderItemInput = {
  bookId: Scalars['ID']
  quantity: Scalars['Int']
}

export type OrderItemsPage = {
  nextToken?: Maybe<Scalars['String']>
  orderItems?: Maybe<Array<Maybe<OrderItem>>>
}

export type Query = {
  getBookById: Book
  listBooks: BooksPage
  myOrders: OrderItemsPage
}

export type QueryGetBookByIdArgs = {
  bookId: Scalars['ID']
}

export type QueryListBooksArgs = {
  limit: Scalars['Int']
  nextToken?: InputMaybe<Scalars['String']>
}

export type QueryMyOrdersArgs = {
  limit: Scalars['Int']
  nextToken?: InputMaybe<Scalars['String']>
}

export type GetBookByIdQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type GetBookByIdQuery = {
  getBookById: {
    bookId: string
    title: string
    description?: string | null
    price: number
    author: string
  }
}

export const GetBookByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getBookById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'bookId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'bookId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'author' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBookByIdQuery, GetBookByIdQueryVariables>
