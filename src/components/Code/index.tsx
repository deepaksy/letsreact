import Toast from '../Toast';
import './index.scss'
import { useLayoutEffect, useRef, useState } from 'react'


const Code = ({children}:{children:any}) => {
  const [showToast,setShowToast] = useState(false);
  const content = children.props.children.props.children;
  const handleCopy = () => {
    navigator.clipboard.writeText(content)
    setShowToast(true)
  }

  return (
    <div className='code-container'>
    {children}
    <button className='copy-button' onClick={()=> handleCopy()} >copy to clipboard</button>
    {showToast && <Toast message='content copied to your clipboard' />}
    </div>
  )
}

export default Code