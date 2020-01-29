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
        return 'found book'
      } 
    }
    if (item < dewey) {
      return deweySearching(dewey, title, index + 1, end);
    }
    else if (item > dewey) {
      return deweySearching(dewey, title, start, index - 1);
    }
  }
  console.log(deweySearching(['be', 'he', 'hi'], 'hi'))