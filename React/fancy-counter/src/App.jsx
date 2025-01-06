import Increment from "./components/Increment"

const App = () => {
  return (
    <div>
      <Increment number={5} limit={true} />
    </div>
  )
}

export default App