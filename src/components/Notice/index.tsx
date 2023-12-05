import { Fragment, useState } from 'react';
import './index.scss'
import { MdOutlineNoteAlt } from 'react-icons/md';
import { IoIosClose } from "react-icons/io";

type NoticeProps = {
    heading?:string
    subheading?:string
    children:React.ReactNode
    closeButton?:true|false
}

const Notice = ({
    heading='Note',
    subheading,
    children,
    closeButton=false
}:NoticeProps) => {
    const [isOpen,setIsOpen] = useState<boolean>(true)
  return (
    <Fragment>
        {isOpen?<div className={'notice-container'}>
        <div className='notice-header'>
        <div className='notice-header-left'>
        <MdOutlineNoteAlt size={40}/>
        <h1>{heading}</h1>
        </div>
            {closeButton&&<IoIosClose style={{margin:'0rem 2rem',fontSize:40,cursor:'pointer'}} onClick={()=>setIsOpen(false)}/>}
        </div>
        <div className='notice-content'>
        <h4>{subheading}</h4>
        <p>{children}</p>
        </div>
    </div>:''}
    </Fragment>
  )
}

export default Notice