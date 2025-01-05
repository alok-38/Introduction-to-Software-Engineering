import { useState } from "react"

const MyButton = () => {
  const [count, setCount] = useState(0);
  function makeLove() {
    setCount(count + 1);
  }
  return (
    <button onClick={makeLove}>Make love {count} times!</button>
  )
}

export default MyButton