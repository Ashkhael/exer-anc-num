function parseAncientText(input) {
  const ancientNum = new Array(
    ["....", "....", "....", "...."],
    ["****", "....", "....", "...."],
    ["****", "....", "....", "****"],
    ["....", "****", "....", "...."],
    ["....", "****", "****", "...."],
    ["*...", "*...", "*...", "*..."],
    ["*..*", "*..*", "*..*", "*..*"],
    [".*..", ".*..", ".*..", ".*.."],
    [".**.", ".**.", ".**.", ".**."],
    ["****", "****", "****", "****"]
  );

  function compareSymbols(symbol1, symbol2) {
    if (symbol1.length != symbol2.length) return false;
    for (i = 0; i < symbol1.length; i++) {
      if (symbol1[i] != symbol2[i]) return false;
    }
    return true;
  }

  function parseInput(numeral) {
    var output = "";
    if (Array.isArray(numeral[0][0]) === true) {
      for (var i = 0; i < numeral.length; i++) {
        for (var k = 0; k < numeral[i].length; k++) {
          let inputArray = new Array();
          for (var l = 0; l < 4; l++) {
            inputArray.push(numeral[i][l][k]);
          }
          for (var n = 0; n < 10; n++) {
            if (compareSymbols(inputArray, ancientNum[n])) {
              output += n;
            }
          }
        }
        output += " ";
      }
    } else if (Array.isArray(numeral[0][0]) === false) {
      for (var k = 0; k < numeral[0].length; k++) {
        let inputArray = new Array();
        for (var i = 0; i < 4; i++) {
          inputArray.push(numeral[i][k]);
        }
        for (var n = 0; n < 10; n++) {
          if (compareSymbols(inputArray, ancientNum[n])) {
            output += n;
          }
        }
      }
    }
    console.log(output);
  }
  parseInput(input);
}

/*function compareSymbols(symbol1, symbol2) {
    if (symbol1.length != symbol2.length) return false;
    for (i = 0; i < symbol1.length; i++) {
      if (symbol1[i] != symbol2[i]) return false;
    }
    return true;
  }

  console.log(compareSymbols(input, ancientNum));
  console.log(input);
  console.log(ancientNum);*/

parseAncientText([
  [
    ["****", "....", "....", "****"],
    ["....", "****", "....", "****"],
    ["....", "****", "....", "****"],
    ["****", "....", "....", "****"],
  ],
]);

/*              OBJEKT ARRAY ZNAKOVA:RIMSKI BROJ #1
//-------------------------------------------------------------1

new Object(
  (ancientNum[0] = modernNum[0]),
  (ancientNum[1] = modernNum[1]),
  (ancientNum[2] = modernNum[2]),
  (ancientNum[3] = modernNum[3]),
  (ancientNum[4] = modernNum[4]),
  (ancientNum[5] = modernNum[5]),
  (ancientNum[6] = modernNum[6]),
  (ancientNum[7] = modernNum[7]),
  (ancientNum[8] = modernNum[8]),
  (ancientNum[9] = modernNum[9])
);
*/

/*              OBJEKT ARRAY ZNAKOVA:RIMSKI BROJ #2
//-------------------------------------------------------------2

var key = {
  [["...."], ["...."], ["...."], ["...."]]:0,
  [["****"], ["...."], ["...."], ["...."]]:1,
  [["****"], ["...."], ["...."], ["****"]]:2,
  [["...."], ["****"], ["...."], ["...."]]:3,
  [["...."], ["****"], ["****"], ["...."]]:4,
  [["*..."], ["*..."], ["*..."], ["*..."]]:5,
  [["*..*"], ["*..*"], ["*..*"], ["*..*"]]:6,
  [[".*.."], [".*.."], [".*.."], [".*.."]]:7,
  [[".**."], [".**."], [".**."], [".**."]]:8,
  [["****"], ["****"], ["****"], ["****"]]:9
},
*/

/*              LOOP KOJI MIJENJA ZNAKOVE ZA RIMSKE BROJEVE - ne radi
//-----------------------------------------------------------------------3

for (let i in ancientNum) {
  index = input.indexOf(ancientNum[i]);
  while (index != -1) {
    output += parseInt(modernNum[i]);
    input = input.replace(ancientNum[i], "-");
    index = input.indexOf(ancientNum[i]);
  }
}*/

/*              PROVJERAVANJE JE LI ITEM U ARRAY-u #1 - ne radi
//-----------------------------------------------------------------------4

function arraysIdentical(arr1, arr2) {
  var i = arr1.length;
  if (i !== arr2.length) {
    return false;
  }
  while (i--) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function indexOf(arr, val, comparer) {
  for (var i = 0, len = arr.length; i < len; ++i) {
    if (i in arr && comparer(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

for (let i in ancientNum) {
    index = indexOf(ancientNum, input, arraysIdentical);
*/

/*                      PROVJERAVANJE JE LI ITEM U ARRAY-u #2 - ne radi
//-----------------------------------------------------------------------5

function isItemInArray(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][0] == item[0] && array[i][1] == item[1]) {
      return true;
    }
    return false;
  }
}
if (isItemInArray(ancientNum, input) == false) {
  return "Invalid input";
}
*/

/*                       DOHVAĆANJE STUPCA
//-----------------------------------------------------------------------6

function getCol(matrix, col) {
  var column = [];
  for (var i = 0; i < matrix.length; i++) {
    column.push(matrix[i][col]);
  }
  return column;
}

getCol(input, 0);
*/
