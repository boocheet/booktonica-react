export function getAllBooks() {
  return fetch(`${apiUrl}/books`, {
    headers: {
      // This header is needed or React app won't proxy it along to Express
      Accept: "application/json"
    }
  }).then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(
        `😩 fetch('${apiUrl}/books') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}. (Note: this error is custom to Booktonica and you cannot Google it). Check your Network console for more information about the request and the Express logs for more information about the response.`
      );
    }
  });
}

export function getBookList(){
  return fetch(`${apiUrl}/booklists`, {
    headers: {
      // This header is needed or React app won't proxy it along to Express
      Accept: "application/json"
    }
  }).then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(
        `😩 fetch('${apiUrl}/lists') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}. (Note: this error is custom to Booktonica and you cannot Google it). Check your Network console for more information about the request and the Express logs for more information about the response.`
      );
    }
  });
}

export function getAllBooksInList(){
  return fetch(`${apiUrl}/lists`, {
    headers: {
      // This header is needed or React app won't proxy it along to Express
      Accept: "application/json"
    }
  }).then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(
        `😩 fetch('${apiUrl}/lists') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}. (Note: this error is custom to Booktonica and you cannot Google it). Check your Network console for more information about the request and the Express logs for more information about the response.`
      );
    }
  });
}
const apiUrl = process.env.REACT_APP_BOOKTONICA_API 
export function addBookToList(book) {
  return fetch(`${apiUrl}/booklist_books`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  })
}

export function getListBooksBelongTo(id){
  return fetch(`${apiUrl}${apiUrl}/listsBookBelongsTo/${id}`, {
    headers: {
      // This header is needed or React app won't proxy it along to Express
      Accept: "application/json"
    }
  }).then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(
        `😩 fetch('${apiUrl}/listsBooksBelongTo') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}. (Note: this error is custom to Booktonica and you cannot Google it). Check your Network console for more information about the request and the Express logs for more information about the response.`
      );
    }
  });
}

export function getBooksInList(list_id){
  return fetch(`${apiUrl}/booksInList/${list_id}`, {
    headers: {
      // This header is needed or React app won't proxy it along to Express
      Accept: "application/json"
    }
  }).then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(
        `😩 fetch('${apiUrl}/booksInList') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}. (Note: this error is custom to Booktonica and you cannot Google it). Check your Network console for more information about the request and the Express logs for more information about the response.`
      );
    }
  });
}