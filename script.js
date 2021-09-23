const button = document.getElementById("countButton");

button.addEventListener("click", function() {  
    const words = document.getElementById('wordsDiv')
    const letters = document.getElementById("lettersDiv")
    // NECESSÁRIO PARA QUANDO CLICAR NOVAMENTE NO BOTÃO LIMPAR O QUE TINHA SIDO FEITO ANTES
    words.innerText = ''
    letters.innerText = ''

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
        const textContent = `"${letter}":${letterCounts[letter]}, `;
        span.innerText = textContent; 
        letters.appendChild(span); 
    }

    const wordCounts = {}
    let arrTypedText = typedText.split(' ')
    for (let i = 0; i < arrTypedText.length; i++) {
        let currentWord = arrTypedText[i]

        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1
        } else {
            wordCounts[currentWord]++
        }
    }
    for (let word in wordCounts) {
        const span = document.createElement('span')
        const textContent = `${word}:${wordCounts[word]}, `
        span.innerText = textContent
        words.appendChild(span)
    }
});