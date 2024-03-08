import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './singer'
import BookStore from './BookStore'

function App() {
  const [count, setCount] = useState(0)
  const actors=['manna','tiger sorif','difjol','shakib']
  const singers=[
    {name:'joy', age:24},
    {name:'khalid', age:25},
    {name:'ridoy', age:26},
    {name:'nahid', age:27},
  ]
    const books=[
      {name:'bangla',price:'100'},
      {name:'english',price:'120'},
      {name:'math',price:'130'},
    ]
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer=><Singer singer={singer}></Singer>)
      }
      <Actor name={'bappa raz'}></Actor>
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }

      <Todo task="learn react" isFinish={true}></Todo>
      <Todo task="core concepts" isFinish={false}></Todo>
      <Todo task="try jsx" isFinish={true}></Todo>
      <Device name="laptop" price="55"></Device>
      <Device name="mobile" price="50"></Device>
      <Device name="watch" price="58"></Device>
      <Person></Person>
      <Student age="20" grade="10"></Student>
      <Student age="19" grade="10"></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}
function Person(){
  return(
    <h1 className='person'>my name is khalid </h1>
  )
}
function Device({name,price}){
  // return(
  //   <h3 >this is:{props.name} price:{props.price}</h3>
  // )
  return(
    <h3 >this is:{name} price:{price}</h3>
  )
}
function Student({age=21,grade=0}){
  return(
   <div className='student'>
     <h2>This is a student</h2>
    <p>age: {age}</p>
    <p>class: {grade}</p>
   </div>
  )
}
function Developer(){
  const developerStyle={
    border:"2px solid green",
    marginTop:'20px',
    borderRadius:'16px'
  }
  return(
   <div style={developerStyle}>
     <h2>This is a developer</h2>
    <p>coding...</p>
    <p></p>
   </div>
  )
}
export default App
