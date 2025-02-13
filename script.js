// Function to simulate plagiarism check with better text matching logic
function checkPlagiarism() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;

    if (text1 === '' || text2 === '') {
        alert('Please fill both text fields!');
        return;
    }

    // Clean up and prepare the texts by splitting them into words
    const words1 = text1.split(/\s+/).map(word => word.toLowerCase());
    const words2 = text2.split(/\s+/).map(word => word.toLowerCase());

    // Calculate common words between both texts
    let commonWordsCount = 0;

    words1.forEach(word1 => {
        if (words2.includes(word1)) {
            commonWordsCount++;
        }
    });

    // Calculate the percentage of matching words
    const totalWords = Math.max(words1.length, words2.length);
    const similarityPercentage = (commonWordsCount / totalWords) * 100;

    // Display similarity result
    const similarityText = document.getElementById('similarity');
    similarityText.textContent = `Similarity: ${similarityPercentage.toFixed(2)}%`;

    // Optionally, you can display the matched words or content as well
    const matchedText = getMatchedText(words1, words2);
    if (matchedText.length > 0) {
        document.getElementById('matched-text').textContent = `Matched Text: ${matchedText.join(' ')}`;
    } else {
        document.getElementById('matched-text').textContent = 'No exact matched content found.';
    }
}

// Function to find and return matched content (for display purposes)
function getMatchedText(words1, words2) {
    const matched = [];
    words1.forEach(word1 => {
        if (words2.includes(word1)) {
            matched.push(word1);
        }
    });
    return matched;
}
