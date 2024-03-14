
// First


document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.word');
    const pictures = document.querySelectorAll('.picture');
    const feedback = document.getElementById('feedback');
    let selectedWord = null;
    let selectedPicture = null;

    words.forEach(word => {
        word.addEventListener('click', () => {
            if (!word.classList.contains('matched')) {
                if (selectedWord !== null) {
                    selectedWord.classList.remove('selected');
                }
                selectedWord = word;
                word.classList.add('selected');
                checkMatch();
            } else {
                feedback.textContent = 'This word has already been matched.';
            }
        });
    });

    pictures.forEach(picture => {
        picture.addEventListener('click', () => {
            if (!picture.classList.contains('matched')) {
                if (selectedPicture !== null) {
                    selectedPicture.classList.remove('selected');
                }
                selectedPicture = picture;
                picture.classList.add('selected');
                checkMatch();
            } else {
                feedback.textContent = 'This picture has already been matched.';
            }
        });
    });

    function checkMatch() {
        if (selectedWord && selectedPicture) {
            const wordText = selectedWord.dataset.word;
            const pictureAlt = selectedPicture.alt;

            if (wordText === pictureAlt) {
                feedback.innerHTML = '<i class="fas fa-check-circle correct"></i> Correct! You matched the word and picture';
                selectedWord.classList.add('matched');
                selectedPicture.classList.add('matched');
                feedback.classList.add('correct');
            } else {
                feedback.innerHTML = '<i class="fas fa-times-circle wrong"></i> Wrong! The word and picture do not match';
                feedback.classList.add('wrong');
            }

            selectedWord = null;
            selectedPicture = null;
        }
    }
});




  






































// document.addEventListener('DOMContentLoaded', function() {
//     const words = document.querySelectorAll('.word');
//     const pictures = document.querySelectorAll('.picture');
//     const feedback = document.getElementById('feedback');
//     let selectedWord = null;
//     let selectedPicture = null;

//     words.forEach(word => {
//         word.addEventListener('click', () => {
//             if (!word.classList.contains('matched')) {
//                 if (selectedWord !== null) {
//                     selectedWord.classList.remove('selected');
//                 }
//                 selectedWord = word;
//                 word.classList.add('selected');
//                 checkMatch();
//             }
//         });
//     });

//     pictures.forEach(picture => {
//         picture.addEventListener('click', () => {
//             if (!picture.classList.contains('matched')) {
//                 if (selectedPicture !== null) {
//                     selectedPicture.classList.remove('selected');
//                 }
//                 selectedPicture = picture;
//                 picture.classList.add('selected');
//                 checkMatch();
//             }
//         });
//     });

//     function checkMatch() {
//         if (selectedWord && selectedPicture) {
//             const wordText = selectedWord.dataset.word;
//             const pictureAlt = selectedPicture.alt;

//             if (wordText === pictureAlt) {
//                 feedback.textContent = 'Correct! You matched the word and picture.';
//                 feedback.className = 'feedback correct';
//             } else {
//                 feedback.textContent = 'Wrong! The word and picture do not match.';
//                 feedback.className = 'feedback wrong';
//             }

//             selectedWord = null;
//             selectedPicture = null;
//         }
//     }
// });

























// document.addEventListener('DOMContentLoaded', function() {
//     let words = ["Apple", "Sunflower", "Grapes", "Onion", "Carrot", "Orange"];
//     let pictures = ["images/apple.jpeg", "images/sunflower.jpeg", "images/grapes.png", "images/onion.jpg", "images/carrot.jpeg", "images/orange.jpeg"];
//     const feedback = document.getElementById('feedback');
//     const gameSection = document.getElementById('gameSection');
//     const scoreSection = document.getElementById('scoreSection');
//     const scoreDisplay = document.getElementById('score');
//     const rewardsDisplay = document.getElementById('rewards');

//     let selectedWord = null;
//     let selectedPicture = null;
//     let matchedPairs = [];

//     function initializeGame() {
//         shuffleArrays(words);
//         shuffleArrays(pictures);
//         matchedPairs = [];
//         renderWordsAndPictures();
//     }

//     function renderWordsAndPictures() {
//         const wordList = document.querySelector('.word-list');
//         const pictureList = document.querySelector('.picture-list');

//         wordList.innerHTML = '';
//         pictureList.innerHTML = '';

//         for (let i = 0; i < words.length; i++) {
//             const wordElement = document.createElement('div');
//             wordElement.classList.add('word');
//             wordElement.textContent = words[i];
//             wordElement.dataset.word = words[i];
//             wordElement.dataset.index = i;
//             wordElement.addEventListener('click', handleWordClick);
//             wordList.appendChild(wordElement);

//             const pictureElement = document.createElement('img');
//             pictureElement.classList.add('picture');
//             pictureElement.src = pictures[i];
//             pictureElement.alt = words[i];
//             pictureElement.dataset.index = i;
//             pictureElement.addEventListener('click', handlePictureClick);
//             pictureList.appendChild(pictureElement);
//         }
//     }

//     function handleWordClick(event) {
//         selectedWord = event.target;
//         checkMatch();
//     }

//     function handlePictureClick(event) {
//         selectedPicture = event.target;
//         checkMatch();
//     }

//     function checkMatch() {
//         if (selectedWord && selectedPicture) {
//             const wordIndex = parseInt(selectedWord.dataset.index);
//             const pictureIndex = parseInt(selectedPicture.dataset.index);

//             const wordText = selectedWord.dataset.word;
//             const pictureAlt = selectedPicture.alt;

//             const pair = { wordIndex, pictureIndex };

//             if (!isPairMatched(pair)) {
//                 if (wordText === pictureAlt && wordText === "Apple") {
//                     feedback.innerHTML = '<i class="fas fa-check-circle correct"></i> Correct! You matched the word and picture';
//                     selectedWord.classList.add('matched');
//                     selectedPicture.classList.add('matched');
//                     matchedPairs.push(pair);
//                 } else if (wordText !== pictureAlt && wordText === "Apple") {
//                     feedback.innerHTML = '<i class="fas fa-times-circle wrong"></i> Wrong! The word "Apple" does not match with this picture';
//                 } else if (wordText === pictureAlt && wordText !== "Apple") {
//                     feedback.innerHTML = '<i class="fas fa-times-circle wrong"></i> Wrong! This word does not match with the picture of an apple';
//                 } else {
//                     feedback.innerHTML = '<i class="fas fa-times-circle wrong"></i> Wrong! The word and picture do not match';
//                 }
//             } else {
//                 feedback.textContent = 'This pair has already been matched.';
//             }

//             selectedWord = null;
//             selectedPicture = null;

//             if (matchedPairs.length === words.length) {
//                 endGame();
//             }
//         }
//     }

//     function isPairMatched(pair) {
//         return matchedPairs.some(matchedPair => matchedPair.wordIndex === pair.wordIndex || matchedPair.pictureIndex === pair.pictureIndex);
//     }

//     function endGame() {
//         gameSection.style.display = 'none';
//         scoreSection.style.display = 'block';
//         scoreDisplay.textContent = `Score: ${matchedPairs.length} out of ${words.length}`;
//         rewardsDisplay.textContent = determineReward(matchedPairs.length);
//     }

//     function determineReward(score) {
//         // Your logic for determining rewards based on score goes here
//         // You can return different messages or elements based on score
//         if (score === words.length) {
//             return "Congratulations! You got all matches correct!";
//         } else if (score >= words.length / 2) {
//             return "Great job! You got some matches correct!";
//         } else {
//             return "Keep practicing! You'll get better!";
//         }
//     }

//     // Fisher-Yates Shuffle Algorithm for shuffling both arrays in the same way
//     function shuffleArrays(array) {
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//     }

//     initializeGame();
// });



