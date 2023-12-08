import React from 'react'
import { useLocation } from 'react-router-dom'
import DocLayout from './DocLayout'
import ContactLayout from './ContactLayout'
import AboutLayout from './AboutLayout'

const Layout = ({children}:{children:React.ReactNode}) => {
    const location = useLocation()
    if(location.pathname.includes('/docs')){
        return (
            <DocLayout>{children}</DocLayout>
          )
    }
    else if(location.pathname.includes('/')){
        return <main>{children}</main>
    }
    else if(location.pathname.includes('/contact')) {
        return <ContactLayout>{children}</ContactLayout>
    }
    else if(location.pathname.includes('/about')) {
        return <AboutLayout>{children}</AboutLayout>
    }
    else {
        return <>{children}</>
    }
}

export default Layout