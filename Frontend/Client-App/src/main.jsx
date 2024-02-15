import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import Theme from './Components/Theme.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider  Theme={Theme}>
    <App/>
  </ChakraProvider>,
)
