import * as React from 'react'
import './index.scss'

export interface IntroProps {
    children?: React.ReactNode
}

const Intro = ({children}: IntroProps) => {
    return (
        <div className='font-display text-xl text-primary dark:text-primary-dark leading-relaxed'>
            {children}
        </div>
    )
}

export default Intro