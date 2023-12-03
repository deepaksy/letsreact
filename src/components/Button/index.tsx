import './index.scss'
export type ButtonTypes = React.ComponentProps<'button'>

const Button = ({children, ...props}: ButtonTypes) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default Button