import { useEffect, useState } from 'react';
import './index.scss'

interface ToastProps {
    message: string;
    duration?: number;
}

const Toast: React.FC<ToastProps> = ({message, duration =3000}) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(false);
        }, duration);
    
        return () => clearTimeout(timer);
      }, [duration]);

    return visible ? (
        <div className='toast-container'>
            <div className='toast-content'>{message}</div>
        </div>
    ) : null
}

export default Toast

