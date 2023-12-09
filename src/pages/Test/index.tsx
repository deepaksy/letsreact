import Code from '../../components/Code'
import Notice from '../../components/Notice'
import TestButton from '../../components/TestButton'
import TestComponent from '../../content/Test/index.mdx'
import './index.scss'


const Test = () => {
  return (
    <div >
      <Notice heading='Note for readers' subheading='please help us!'>
        Hope you all are doing well, <i>I am here</i> by <b style={{color:'pink'}}>announcing</b> that we are giving away!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur suscipit porro delectus dolore, quibusdam itaque ea dicta consequatur nemo reiciendis, doloribus at autem molestias similique! Qui placeat architecto commodi ut ab, deleniti quidem aliquam quibusdam odit? Sit quidem alias a, laboriosam, aliquam quae modi tempora quisquam et, blanditiis in dolores. Totam nulla ullam pariatur natus iure laborum molestias laboriosam delectus. Praesentium, optio similique ipsum delectus dolore sunt ex quas quam fugiat reprehenderit quos repellendus! Deserunt tempore, dolor nulla voluptatum pariatur natus laborum dolorem fugiat cumque ex voluptatem iste animi necessitatibus maxime inventore ullam autem odit! Possimus ratione illum consequatur nesciunt?
      </Notice>
      <h1>Hello world</h1>

      <TestButton/>
      <TestComponent/>
    </div>
  )
}

export default Test