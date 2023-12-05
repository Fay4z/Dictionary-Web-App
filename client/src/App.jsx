import { useState } from "react";
import FormComponent from "./components/FormComponent"
import DisplayData from "./components/DisplayData"
 
function App() {
    const [inputWordData, setInputWordData] = useState("");
    const [synonyms, setSynonyms] = useState();
    const [antonyms, setAntonyms] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");


    const getSynonyms = async(inputWord) => {
        const response = await fetch(`https://api.datamuse.com/words?rel_syn=${inputWord}`)
        const data = await response.json();
        setSynonyms(data);
    }

    const getAntonyms = async(inputWord) => {
        const response = await fetch(`https://api.datamuse.com/words?rel_ant=${inputWord}`)
        const data = await response.json();
        setAntonyms(data);
    }

    const handleFormSubmit = async (inputWord) => {
        // e.preventDefault();
        console.log("hi");
        setIsLoading(true);
        console.log(inputWord);
        setInputWordData(inputWord);
        try{
            await getSynonyms(inputWord);
            await getAntonyms(inputWord);
        }catch(e){
            setError(e);
            console.log(e);
        }
        console.log("bye");
        setIsLoading(false);
    }

  return (
    <div className="max-w-7xl m-auto py-10">

      <FormComponent onFormSubmit={handleFormSubmit}/>
      <p className="text-gray-600 text-xl py-4 text-center">**Search a word to get its antonyms and synonyms</p>
      {error && <p>Error {error}</p>}
      {isLoading ? 
        <p>Loading...</p>
        : (
          <DisplayData synonyms={synonyms} antonyms={antonyms} inputWordData={inputWordData}/>
        )
      }
    </div>
  )
}

export default App
