import React, { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import DocLayout from './DocLayout'
import ContactLayout from './ContactLayout'
import AboutLayout from './AboutLayout'
import './index.scss'

const Layout = ({children}:{children:React.ReactNode}) => {
    const location = useLocation()
    if(location.pathname.includes('/docs')){
        return (
            <Spacer>
                <DocLayout>{children}</DocLayout>
            </Spacer>
          )
    }
    else if(location.pathname.includes('/')){
        return <Spacer><main>{children}</main></Spacer>
    }
    else if(location.pathname.includes('/contact')) {
        return <Spacer><ContactLayout>{children}</ContactLayout></Spacer>
    }
    else if(location.pathname.includes('/about')) {
        return <Spacer><AboutLayout>{children}</AboutLayout></Spacer>
    }
    else {
        return <Spacer><>{children}</></Spacer>
    }
}


const Spacer = ({children}:{children: ReactElement}) => {
    return (
        <div className='spacer'>
            {children}
        </div>
    )
}

export default Layout