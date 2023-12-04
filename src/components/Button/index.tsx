import { buttonType } from '../../types/button.types'
import './index.scss'
export type ButtonTypes = {
  variant?: buttonType
} & React.ComponentProps<'button'>

const Button = ({children,variant='primary', ...props}: ButtonTypes) => {
  return (
    <button className={`button-${variant}`} {...props}>{children}</button>
  )
}

export default Button