import { useState } from "react";
import DisplayData from "./DisplayData";

function FormComponent() {

    const [inputWord, setInputWord] = useState("");
    const [synonyms, setSynonyms] = useState();
    const [antonyms, setAntonyms] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [serror, setError] = useState("");


    const getSynonyms = async() => {
        const response = await fetch(`https://api.datamuse.com/words?rel_syn=${inputWord}`)
        const data = await response.json();
        setSynonyms(data);
    }

    const getAntonyms = async() => {
        const response = await fetch(`https://api.datamuse.com/words?rel_ant=${inputWord}`)
        const data = await response.json();
        setAntonyms(data);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log("hi");
        setIsLoading(true);
        try{
            await getSynonyms();
            await getAntonyms();
        }catch(e){
            setError(e);
        }
        console.log("bye");
        setIsLoading(false);
    }

    return ( 
        <div>
            <h1>This is Form Component</h1>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    className="border p-3 w-96 rounded"
                    value={inputWord}
                    onChange={(e) => {setInputWord(e.target.value)}}
                />
                <button className="border bg-green-500 p-3 px-5 rounded ml-6">Search</button>
            </form>
            {isLoading ? 
                <p>Loading ....</p>
                :
                <DisplayData inputWord={inputWord} synonyms={synonyms} antonyms={antonyms} /> 
            }
        </div>
     );
}

export default FormComponent;