import { useState } from 'react'
// import Card from './components/Card'


function App() {

  const [color, setColor] = useState("olive")
  
  // let counter = 10;
  // let [counter, setCounter] = useState(10)
  // const increaseVal = ()=>{
  //   setCounter(counter+1);
  // }
  // const decreaseVal = ()=>{
  //   setCounter(counter-1);
  // }
  // let myObj = {
  //   userName:'Mogo',
  //   age:21
  // }
  return (
    <>
    {/* 1 */}
     {/* <h1>Counter Project</h1>
      <p>Counter: {counter}</p>

      <button onClick={()=>{setCounter(counter+1)}}>Increase</button>
      <br></br>
      <button onClick={()=>{setCounter(counter-1)}}>Decrease </button> */}

      {/* 2 */}
      {/* <h1 className='bg-green-400 text-black p-4 rounded-xl mb-6'>Tailwind</h1>

      <Card userName ="spongBob" btnText = "visitMe" anyObj = {myObj}/>
      <Card userName ="guffy" /> */}


      {/* 3 */}
      
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap gap-3 justify-center shadow-lg py-2 px-3 bg-white rounded-xl'>

            <button onClick={()=>{setColor("red")}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>

            <button onClick={()=>{setColor("green")}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>

            <button onClick={()=>{setColor("blue")}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>

            <button onClick={()=>{setColor("yellow")}} 
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>

            <button onClick={()=>{setColor("orange")}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>

            <button onClick={()=>{setColor("brown")}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"}}>Brown</button>

            <button onClick={()=>{setColor("black")}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>
            
            <button onClick={()=>{setColor("white")}} 
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-lg" style={{backgroundColor:"white"}}>White</button>

            <button onClick={()=>{setColor("violet")}} 
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-lg" style={{backgroundColor:"violet"}}>Voilet</button>

            <button onClick={()=>{setColor("gray")}} 
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-lg" style={{backgroundColor:"gray"}}>
              Gray
            </button>

            <button onClick={()=>{setColor("pink")}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>

            <button onClick={()=>{setColor("purple")}} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>

          </div>

        </div>
      </div>


           




    </>
  )
}

export default App
