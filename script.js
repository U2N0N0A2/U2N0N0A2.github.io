// Function to simulate plagiarism check (using a simple comparison logic)
function checkPlagiarism() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;

    if (text1 === '' || text2 === '') {
        alert('Please fill both text fields!');
        return;
    }

    // Simple similarity check - compare common words (for demo purposes)
    const words1 = text1.split(/\s+/);
    const words2 = text2.split(/\s+/);
    
    let commonWordsCount = 0;
    
    words1.forEach(word1 => {
        if (words2.includes(word1)) {
            commonWordsCount++;
        }
    });

    const totalWords = Math.max(words1.length, words2.length);
    const similarityPercentage = (commonWordsCount / totalWords) * 100;

    // Display similarity result
    const similarityText = document.getElementById('similarity');
    similarityText.textContent = `Similarity: ${similarityPercentage.toFixed(2)}%`;
}
