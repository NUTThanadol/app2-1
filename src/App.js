import React from 'react'
import {Navbar,Header,Footer} from './func-components'
import MsgBox from './func-props'
import {MyAbout,MyImage,MyData} from './func-mydata'
import Caledar from './class-component'
import MsgBox2 from './class-props'
import List from './list comp'

function App() {

  return (<List/>)


  //return [<Navbar />,<Header />,<Caledar/>,<Footer />,<Msgbox2/>]
  /*return(
    <MsgBox2
      text="Using props in function coppoment"
      color="red"
      bgcolor="#ccc"
      fontsize="16px"
      border="dotted 1px black" 
    />

  )
  //return [<MyAbout/>,<MyImage/>,<Caledar/>,<MyData/>]*/
}



export default App;
