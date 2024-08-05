import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import Router from './routes'
import {ChakraProvider} from '@chakra-ui/react'
import {DataProvider} from "./store/EtablissementContext.tsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <DataProvider>
            <React.StrictMode>
                <Router/>
            </React.StrictMode>
        </DataProvider>
    </ChakraProvider>,
)
