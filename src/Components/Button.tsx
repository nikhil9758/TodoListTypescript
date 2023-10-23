import React from 'react'

interface buttonprop{
    onclick:()=>void
}
const Button: React.FC<buttonprop> = ({onclick}) => {
  return (
    <>
        <button type='submit' onClick={onclick}>Go</button>
    </>
  )
}

export default Button