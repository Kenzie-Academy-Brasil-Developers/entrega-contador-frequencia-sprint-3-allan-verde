const button = document.getElementById("countButton");

button.addEventListener("click", function() {  
    let typedText = document.getElementById("textInput").value
    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    
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