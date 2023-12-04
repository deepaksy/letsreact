import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter'
import './global.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<AppRouter/>)