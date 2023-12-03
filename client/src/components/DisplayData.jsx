function DisplayData({inputWord, antonyms, synonyms}) {

    console.log(inputWord, synonyms, antonyms);
    return ( 
        <div>
            <div className="">
                <div>
                    {synonyms && 
                        <p className="text-4xl text-center my-9">List of Synonyms ({synonyms.length})</p>}
                    <div className="grid grid-cols-4 gap-4 ">
                        {synonyms && 
                            synonyms.map(synonym => (
                                <div
                                key={synonym.word} 
                                className="border border-gray-400 p-3 text-center max-w-full rounded"
                                >
                                    <p className="text-xl">{synonym.word}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    {antonyms && 
                        <p className="text-4xl text-center my-9">List of Antonyms ({antonyms.length})</p>}
                    <div className="grid grid-cols-4 gap-4" >
                        {antonyms && 
                            antonyms.map(antonym => (
                                <div 
                                    key={antonym.word} 
                                    className="border border-gray-400 p-3 text-center max-w-full rounded"
                                >
                                    <p className="text-xl">{antonym.word}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
     );
}

export default DisplayData;