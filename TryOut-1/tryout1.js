if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

const fs = require('fs');
const filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;

  data = data.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

  const lines = data.split('\n');
  const splitStr = lines[0].split(' ');

  console.log('\nJumlah semua kata: ' + getTotalWords(splitStr));
  countUniqueWordsAndNumbers(splitStr);
});

function getTotalWords(wordsArr) {
  return wordsArr.length;
}

function countUniqueWordsAndNumbers(wordsArr) {
  let wordsObj = {};
  let numbersArr = [];

  wordsArr.forEach(function(word) {
    word = word.toLowerCase();

    if (!isNaN(word)) {
      numbersArr.push(word);
    } else {
      if (word in wordsObj) {
        wordsObj[word]++;
      } else {
        wordsObj[word] = 1;
      }
    }
  });

  renderOutputToTheScreen(wordsObj, numbersArr);
}

function renderOutputToTheScreen(wordsObj, numbersArr) {
  console.log('Jumlah kata yang unik: ' + Object.keys(wordsObj).length);
  console.log('Jumlah kata yang unik dan jumlahnya masing-masing: ');

  for (const key in wordsObj) {
    console.log(key + ': ' + wordsObj[key]);
  }

  console.log('Ada ' + numbersArr.length + ' angka: ' + numbersArr.join(' '));
  console.log('Jumlah semua angka: ' + getAdditionOfNumbers(numbersArr));
}

function getAdditionOfNumbers(numbersArr) {
  numbersArr = numbersArr.map(Number);

  return numbersArr.reduce((a, b) => a + b, 0);
}
