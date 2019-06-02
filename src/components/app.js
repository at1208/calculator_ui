import React from 'react'
import './app.css'
import Block from './block'
import Screen from './screen'

const App = () => {
  return <div className='a1 shadow container btn card '>
  <div className='container-fluid'>
    <Screen />
  </div>
  <div className='row'>

          <Block value='C'/>
          <Block value='%'/>
          <Block value='/'/>
          <Block value='*'/>
          <Block value='-'/>
          <Block value='+'/>
          <Block value='='/>
          <Block value='7'/>
          <Block value='8'/>
          <Block value='9'/>
          <Block value='4'/>
          <Block value='5'/>
          <Block value='6'/>
          <Block value='1'/>
          <Block value='2'/>
          <Block value='3'/>
          <Block value='0'/>
          <Block value='.'/>
           
          </div>
  </div>


}
export default App;
