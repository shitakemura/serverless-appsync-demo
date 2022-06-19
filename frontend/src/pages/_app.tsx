import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Amplify } from 'aws-amplify'

Amplify.configure({
  Auth: {
    region: process.env.NEXT_PUBLIC_COGNITO_REGION,
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_USERPOOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_USERPOOL_WEB_CLIENT_ID,
    mandatorySignIn: true,
  },
})

const myAppConfig = {
  aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_APPSYNC_GRAPHQL_ENDPOINT,
  aws_appsync_region: process.env.NEXT_PUBLICK_APPSYNC_REGION,
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS', // You have configured Auth with Amazon Cognito User Pool ID and Web Client Id
}

Amplify.configure(myAppConfig)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
