import { useLayoutEffect, useState } from "react"
import { THEME } from "../types/theme.type"

const useTheme = () => {
    const [isDark,setIsDark] = useState<boolean>(false)
    const handleThemeStorage = (theme:THEME,type:'SET'|'UNSET'='SET') => {
        if(type == 'UNSET'){
            localStorage.removeItem('theme')
        }
        else {
            localStorage.setItem('theme',theme)
        }
    }

    const toggleTheme = () => {setIsDark(!isDark)}

    useLayoutEffect(()=> {
        if(localStorage.getItem('theme')==null) {
            if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setIsDark(true)
                handleThemeStorage(THEME.DARK)
            }
            else {
                setIsDark(false)
                handleThemeStorage(THEME.LIGHT)
            }
        }
        else {
            setIsDark(localStorage.getItem('theme')==='dark'?true:false)
        }
    },[])

    useLayoutEffect(() => {
        const getThemeValue = isDark?'dark':'light'
        if(isDark) {
            document.documentElement.setAttribute('theme',getThemeValue)
        }
        else {
            document.documentElement.removeAttribute('theme')
        }
        handleThemeStorage(getThemeValue=='dark'?THEME.DARK:THEME.LIGHT)
    },[isDark])

    return {isDark,toggleTheme}
}

export default useTheme