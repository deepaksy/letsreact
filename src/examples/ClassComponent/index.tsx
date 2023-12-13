import { Component, ReactNode } from "react";

export class ClassComponent extends Component {
    constructor(props:any) {
      super(props)
    
      
    }

    render(): ReactNode {
        return(
            <>
            <h1>Hello world</h1>
            </>
        )
    }
}

export default ClassComponent