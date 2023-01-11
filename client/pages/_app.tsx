import React from 'react'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { wrapper } from '../store'

const MyApp: React.FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}

export default MyApp
