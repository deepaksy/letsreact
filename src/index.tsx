import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<AppRouter/>)