/*function searchWord(){
    const word = document.getElementById("wordInput").value;
    if (word === ""){
        alert("Please enter a word");
        return;
    }
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+word;

    fetch(url)

        //.then(response => response.json())
        .then(response => {
            if (!response.ok) {
                throw new Error("Word not found");
            }
            return response.json();
        })
        
        .then(data => {
            document.getElementById("meaning").innerText = data[0].meanings[0].definations[0].defination;
            document.getElementById("pos").innerText = data[0].meanings[0].partOfSpech;
            document.getElementById("example").innerText = data[0].meanings[0].example || "No eaxmple available"
        })
        .catch(()=>{
            alert("word not found")
        })
}*/


function searchWord() {
    const word = document.getElementById("wordInput").value.trim();

    if (word === "") {
        alert("Please enter a word");
        return;
    }

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Word not found");
            }
            return response.json();
        })
        .then(data => {
            const meaning = data[0].meanings[0];
            const definition = meaning.definitions[0];

            document.getElementById("meaning").innerText =
                definition.definition;

            document.getElementById("pos").innerText =
                meaning.partOfSpeech;

            document.getElementById("example").innerText =
                definition.example || "No example available";
        })
        .catch(() => {
            alert("Word not found");
        });
}
