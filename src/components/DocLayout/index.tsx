import './index.scss'

const DocLayout = (props:{children:React.ReactNode}) => {
  return (
    <main className='docs-layout'>
        {props.children}
    </main>
  )
}

export default DocLayout