import '@fontsource-variable/open-sans'
import '@fontsource-variable/spline-sans'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

import { theme } from '@chakra-ui/pro-theme'
// import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { routes } from './routes'

const proTheme = extendTheme(theme)
const extension = {
  colors: { ...proTheme.colors, brand: proTheme.colors.teal },
}
const myTheme = extendTheme(extension, proTheme)

const router = createBrowserRouter(createRoutesFromElements(routes))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
