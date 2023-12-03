import FormComponent from "./components/FormComponent"
import DisplayData from "./components/DisplayData"
 
function App() {

  return (
    <div className="max-w-7xl m-auto">
      <h1>WELCOME TO SIMPLE DICTIONARY</h1>
      <p>Search a word to get its antonyms and synonyms</p>

      <FormComponent />
    </div>
  )
}

export default App
