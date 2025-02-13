// Function to simulate plagiarism check with substring matching logic
function checkPlagiarism() {
    const text1 = document.getElementById('text1').value.trim();
    const text2 = document.getElementById('text2').value.trim();

    if (text1 === '' || text2 === '') {
        alert('Please fill both text fields!');
        return;
    }

    // Calculate the percentage of matching content
    const matchResult = calculateMatchingPercentage(text1, text2);

    // Display the similarity result
    const similarityText = document.getElementById('similarity');
    similarityText.textContent = `Similarity: ${matchResult.percentage.toFixed(2)}%`;

    // Display the matched content
    const matchedText = document.getElementById('matched-text');
    matchedText.textContent = `Matched Text: ${matchResult.matchedText || 'No exact matched content found.'}`;
}

// Function to calculate the percentage of matching content
function calculateMatchingPercentage(text1, text2) {
    // Normalize the case and compare content by finding common substrings
    const words1 = text1.split(/\s+/);
    const words2 = text2.split(/\s+/);

    let matchedText = '';
    let commonWordCount = 0;
    let totalMatchedLength = 0;
    let totalLength = 0;

    // Loop through the words and compare them
    words1.forEach(word1 => {
        words2.forEach(word2 => {
            // Check for substring matches (e.g., "j" matches with "j1")
            if (word2.includes(word1) || word1.includes(word2)) {
                matchedText += word1 + ' ';
                totalMatchedLength += word1.length;  // Add length of the matched word
                commonWordCount++;
            }
        });
    });

    // Calculate the total length of both texts
    totalLength = text1.length + text2.length;

    // Calculate the match percentage based on matched content
    let matchPercentage = 0;
    if (totalLength > 0) {
        matchPercentage = (totalMatchedLength / totalLength) * 100;
    }

    return {
        percentage: matchPercentage,
        matchedText: matchedText.trim()
    };
}
