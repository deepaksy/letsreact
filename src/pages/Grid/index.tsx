import Intro from '../../components/MDX/Intro'
import Homepage from '../../content/homepage'
import './index.scss'

const Grid = () => {
  return (
    <div className='grid-container'>
      <aside className='left'> 
        aside content
      </aside>
        <div>
          <Homepage/>
        </div>
        <div  className='right'>
            I am right container
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor ad repellat vitae eligendi laborum, facere quae tempora facilis quam explicabo unde vero ullam incidunt reprehenderit repellendus voluptatibus sit vel repudiandae dicta. Illo perferendis suscipit culpa odit. Nam, cum soluta.</p>
        </div>
    </div>
  )
}

export default Grid