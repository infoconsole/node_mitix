const fs = require('fs');
const tasks = [];
const wordCounts = {};
const fileDir = './text';
let completedTasks = 0;

function checkIfComplete() {
    completedTasks++;
    if (completedTasks == tasks.length) {
        for (let index in wordCounts) {
            console.log(`${index} : ${wordCounts[index]}`);
        }
    }
}

function addWordCount(word) {
    wordCounts[word] = (wordCounts[word]) ? wordCounts[word] + 1 : 1;
}

function countWordInText(text) {
    const words = text.toString().toLocaleLowerCase().split(" ").sort();
    words.filter(word => word).forEach(word => addWordCount(word));
}

fs.readdir(fileDir, (err, files) => {
    if (err) {
        throw err;
    }
    files.forEach(file => {
        const task = (file => {
            return () => {
                fs.readFile(file, (err2, text) => {
                    if (err2) {
                        throw err2;
                    }
                    countWordInText(text);
                    checkIfComplete();
                });
            };
        })(`${fileDir}/${file}`);
        tasks.push(task);
    });
    tasks.forEach(task => task());
});