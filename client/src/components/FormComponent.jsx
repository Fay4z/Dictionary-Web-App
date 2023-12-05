import { useState } from "react";

function FormComponent({onFormSubmit}) {

    const [inputWord, setInputWord] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(inputWord);
    }

    return ( 
        <div className="text-center">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="border p-3 w-96 rounded"
                    value={inputWord}
                    onChange={(e) => {setInputWord(e.target.value)}}
                />
                <button className="border bg-green-500 p-3 px-5 rounded ml-6">Search</button>
            </form>
        </div>
     );
}

export default FormComponent;