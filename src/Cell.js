import React, { useState } from 'react'

export default function Cell(props) {
  const [st,setSt] = useState(false);

  const isInside = (x,y) => {
    if(x>=0 && x<8 && y>=0 && y<8) return true;
    else return false;
  }

  const calculatePositions = () => {
    let arr = [];
    if(isInside(props.pos.x+1,props.pos.y+1))
    {
      arr = [...arr,{x:props.pos.x+2,y:props.pos.y+1},{x:props.pos.x+1,y:props.pos.y+2}]
    }
    if(isInside(props.pos.x-1,props.pos.y-1))
    {
      arr = [...arr,{x:props.pos.x-2,y:props.pos.y-1},{x:props.pos.x-1,y:props.pos.y-2}]
    }
    if(isInside(props.pos.x-1,props.pos.y+1))
    {
      arr = [...arr,{x:props.pos.x-2,y:props.pos.y+1},{x:props.pos.x-1,y:props.pos.y+2}]
    }
    if(isInside(props.pos.x+1,props.pos.y-1))
    {
      arr = [...arr,{x:props.pos.x+2,y:props.pos.y-1},{x:props.pos.x+1,y:props.pos.y-2}]
    }
    const a = arr
    return a;
  }
  const handleClick = () => {
    if(st == true)
    {
      props.setBoard(props.initialArray());
      setSt(false);
    }
    else
    {
      let brd = props.board;
      
      const a = calculatePositions();
      a.forEach((e)=>{
        if(isInside(e.x,e.y))
        {
          brd[e.x][e.y] = true
        }
      })
      props.setBoard(brd.slice()); 
      setSt(true);
    }
  }
  return (
    <>
      {(st) ? 
      <button class="border-2 w-8 h-8 text-base p-0 md:m-2 bg-black md:w-16 md:h-16"
            onClick={handleClick}
    ></button>
      :(props.board[props.pos.x][props.pos.y] == true) ? 
      <button class="border-2 w-8 h-8 p-0 bg-blue-400 md:m-2 md:w-16 md:h-16"
            onClick={handleClick}
    ></button>:
    <button class="border-2 w-8 h-8 p-0 md:m-2 md:w-16 md:h-16"
            onClick={handleClick}
    ></button>}
    </>
  )
}
