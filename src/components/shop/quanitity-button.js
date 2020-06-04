import React, { useContext } from "react"
import { CartContext } from "./context"

const QuantityButton = () => {
  const ctx = useContext(CartContext)

  return (
    <div>
      <button>up</button>

      <button>down</button>
    </div>
  )
}

const QuanitityInput = () => {
  return <input />
}

export default QuantityButton
