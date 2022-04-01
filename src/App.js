import { useState } from "react"
import Cell from "./Cell";


export default function App() {
  const initialArray = () => {
    let a = Array(8);
    for(let i=0;i<8;i++)
    {
      a[i] = new Array(8).fill(false)
    }
    const b = a;
    return b;
  }
  const [board,setBoard] = useState(initialArray());
  return (
    <div class="flex justify-center mt-10">
      
    <div class="flex-col flex justify-center">
    <i class="flex justify-center">
      Click on Cell to see possible knight positions
    </i>
    <i class="flex justify-center">
      Black cell indicate knight and blue indicate possible moves
    </i>
    <div>
      <Cell pos={{x:0,y:0}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:1,y:0}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:2,y:0}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:3,y:0}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:4,y:0}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:5,y:0}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:6,y:0}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:7,y:0}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
    </div>
    <div>
      <Cell pos={{x:0,y:1}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:1,y:1}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:2,y:1}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:3,y:1}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:4,y:1}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:5,y:1}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:6,y:1}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:7,y:1}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
    </div>
    <div>
      <Cell pos={{x:0,y:2}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:1,y:2}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:2,y:2}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:3,y:2}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:4,y:2}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:5,y:2}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:6,y:2}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:7,y:2}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
    </div>
    <div>
      <Cell pos={{x:0,y:3}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:1,y:3}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:2,y:3}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:3,y:3}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:4,y:3}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:5,y:3}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:6,y:3}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:7,y:3}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
    </div>
    <div>
      <Cell pos={{x:0,y:4}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:1,y:4}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:2,y:4}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:3,y:4}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:4,y:4}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:5,y:4}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:6,y:4}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:7,y:4}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
    </div>
    <div>
      <Cell pos={{x:0,y:5}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:1,y:5}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:2,y:5}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:3,y:5}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:4,y:5}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:5,y:5}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:6,y:5}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:7,y:5}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
    </div>
    <div>
      <Cell pos={{x:0,y:6}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:1,y:6}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:2,y:6}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:3,y:6}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:4,y:6}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:5,y:6}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:6,y:6}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:7,y:6}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
    </div>
    <div>
      <Cell pos={{x:0,y:7}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:1,y:7}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:2,y:7}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:3,y:7}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:4,y:7}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:5,y:7}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:6,y:7}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
      <Cell pos={{x:7,y:7}} board={board} setBoard={(b)=>{setBoard(b)}} initialArray={initialArray}/>
    </div>
    </div>
    </div>
  )
}
