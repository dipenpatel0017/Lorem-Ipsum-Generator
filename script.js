const loremIpsumText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
    "Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
    "Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.",
    "Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.",
    "Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi."
];

function getRandomSentence() {
    return loremIpsumText[Math.floor(Math.random() * loremIpsumText.length)];
}

document.getElementById('generate').addEventListener('click', function() {
    const numParagraphs = document.getElementById('paragraphs').value;
    const numSentences = document.getElementById('sentences').value;
    const output = document.getElementById('output');
    output.innerHTML = '';

    for (let i = 0; i < numParagraphs; i++) {
        let paragraphText = '';
        for (let j = 0; j < numSentences; j++) {
            paragraphText += getRandomSentence() + ' ';
        }
        const paragraph = document.createElement('p');
        paragraph.textContent = paragraphText.trim();
        output.appendChild(paragraph);
    }
});
