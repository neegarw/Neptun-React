import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import BasketContext from './context/BasketContext.jsx'

createRoot(document.getElementById('root')).render(
    <BasketContext >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </BasketContext>
)
