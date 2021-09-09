//let typedText = document.getElementById("textInput").value
//let typedText = "One Fish, Two Fish, Red Fish, Blue Fish By Dr. Seus One fish Two fish Red fish Blue fish. Black fish Blue fish Old fish New fish. This one has a little star. This one has a little car. Say! What a lot Of fish there are. Yes. Some are red. And some are blue. Some are old. And some are new. Some are sad. And some are very, very bad. Why are they Sad and glad bad? I do not know. Go ask your dad. Some are thin. And some are fato. The fat one has A yellow hat. From there to here, from here to there, Funny things Are everywhere. Here are some Who like to run. They run for fun In the hot, hot sun. "
let typedText = ' One Fish'
typedText = typedText.toLowerCase(); 
typedText = typedText.replace(/[^a-z'\s]+/g, ""); 

const button = document.getElementById("countButton");

button.addEventListener("click", function() {  
    const letterCounts = {};
    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];
        
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } else { 
            letterCounts[currentLetter]++; 
        }
    }
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
    }
});
//words = typedText.split(/\s/);