import React from 'react'
import { useLocation } from 'react-router-dom'

const Layout = ({children}:{children:React.ReactNode}) => {
    const location = useLocation()
    if(location.pathname.includes('/docs')){
        return (
            <div>{children}</div>
          )
    }
    else if(location.pathname.includes('/')){
        return <main>{children}</main>
    }
    else {
        return <>{children}</>
    }
}

export default Layout