const sortedList = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

function binarySearch(array, value, start = 0, end = array.length - 1) {
  //base case
  if (start > end) {
    console.log(`${value} not included in list`);
    return -1;
  }
  //find the midpoint and item at that index
  let index = Math.floor((start + end) / 2);
  let item = array[index];
  //case where the midpoint is the value being targeted
  if (item === value) {
    console.log(index);
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

binarySearch(sortedList, 16);
// 8 located at index of 3
// 16 not included in list

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i;
    }
  }
  return -1;
}

///3 Imagine you are looking for a book in a library with a Dewey Decimal index.

function deweySearching(dewey, title, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? dewey.length : end;

  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = dewey[index];

  for (let i = 0; i < dewey.length; i++) {
    if (dewey[i] == title) {
      return "found book";
    }
  }
  if (item < dewey) {
    return deweySearching(dewey, title, index + 1, end);
  } else if (item > dewey) {
    return deweySearching(dewey, title, start, index - 1);
  }
}
console.log(deweySearching(["be", "he", "hi"], "hi"));

//4 Searching in a BST
// in order: 14 15 19 25 27 35 79 89 90 91
//pre order: 35 25 15 14 19 27 89 79 91 90
//post order: 14 19 15 27 25 79 90 91 89 35
//            35
//        /      \
//       25       89
//     /    \     / \
//    15    27   79  91
//   /  \            /
// 14    19         90

//post 5 7 6 9 11 10 8
//pre 8 6 5 7 10 9 11

//       8
//   6      10
// 5   7   9  11

//5 Implement different tree traversals

//6 Find the next commanding officer

function main2() {
  let commanderTree = new BST(5, "Captain Pickard");
  commanderTree.insert(3, "Commander Riker");
  commanderTree.insert(6, "Commander Data");
  commanderTree.insert(2, "Lt. Cmdr. Worf");
  commanderTree.insert(4, "Lt. Cmdr. LaForge");
  commanderTree.insert(8, "Lt. Cmdr. Crusher");
  commanderTree.insert(1, "Lieutenant security-officer");
  commanderTree.insert(7, "Liuetenant Selar");
  return commanderTree;
}
let cTree = main2();
console.log(cTree);

//7. Max profit

function max_profit(prices) {
  if (!prices.length) return 0;
  var buy = prices[0],
    sell = prices[0],
    profit = 0;
  for (var i = 1; i < prices.length; ++i) {
    sell = prices[i];
    if (sell < buy) buy = sell;
    if (sell - buy > profit) profit = sell - buy;
  }
  return profit;
}

console.log(max_profit([128, 97, 121, 123, 98, 97, 105]));
