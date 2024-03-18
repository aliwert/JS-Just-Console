let book1 = {
  name: "Don't think of Everything",
  writer: "Anne Bogel",
  price: 25,
  shelf: "1.5.Shelf",
};
let book2 = {
  name: "Think of a Number",
  writer: "John Verdon",
  price: 56,
  shelf: "2.3.Shelf",
};
let book3 = {
  name: "Game of Thrones",
  writer: "George R. R. Martin",
  price: 34,
  shelf: "3.4.Shelf",
};
let book4 = {
  name: "The Lord of the Rings",
  writer: "John Ronald Reuel Tolkien",
  price: 45,
  shelf: "4.1.Shelf",
};
let book5 = {
  name: "Harry Potter",
  writer: "J.K. Rowling",
  price: 22,
  shelf: "5.3.Shelf",
};

let books = [book1, book2, book3, book4, book5];

let shelf11 = { kod: "1.1.Shelf", show: false };
let shelf12 = { kod: "1.2.Shelf", show: false };
let shelf13 = { kod: "1.3.Shelf", show: false };
let shelf14 = { kod: "1.4.Shelf", show: false };
let shelf15 = { kod: "1.5.Shelf", show: false };

let shelf21 = { kod: "2.1.Shelf", show: false };
let shelf22 = { kod: "2.2.Shelf", show: false };
let shelf23 = { kod: "2.3.Shelf", show: false };
let shelf24 = { kod: "2.4.Shelf", show: false };
let shelf25 = { kod: "2.5.Shelf", show: false };

let shelf31 = { kod: "3.1.Shelf", show: false };
let shelf32 = { kod: "3.2.Shelf", show: false };
let shelf33 = { kod: "3.3.Shelf", show: false };
let shelf34 = { kod: "3.4.Shelf", show: false };
let shelf35 = { kod: "3.5.Shelf", show: false };

let shelf41 = { kod: "4.1.Shelf", show: false };
let shelf42 = { kod: "4.2.Shelf", show: false };
let shelf43 = { kod: "4.3.Shelf", show: false };
let shelf44 = { kod: "4.4.Shelf", show: false };
let shelf45 = { kod: "4.5.Shelf", show: false };

let shelf51 = { kod: "5.1.Shelf", show: false };
let shelf52 = { kod: "5.2.Shelf", show: false };
let shelf53 = { kod: "5.3.Shelf", show: false };
let shelf54 = { kod: "5.4.Shelf", show: false };
let shelf55 = { kod: "5.5.Shelf", show: false };

let shelfs = [
  [shelf51, shelf52, shelf53, shelf54, shelf55],
  [shelf41, shelf42, shelf43, shelf44, shelf45],
  [shelf31, shelf32, shelf33, shelf34, shelf35],
  [shelf21, shelf22, shelf23, shelf24, shelf25],
  [shelf11, shelf12, shelf13, shelf14, shelf15],
];

function createShelf() {
  console.clear();
  let line = "";
  for (let i = 0; i < shelfs.length; i++) {
    for (let j = 0; j < 5; j++) {
      line += "|" + (shelfs[i][j].show ? shelfs[i][j].kod : "---") + "";
    }
    console.log(line);
    console.log("--------------------");
    line = "";
  }
}

function findCode(nameOfBook) {
  let shelfCode = null;
  books.forEach(function (book) {
    if (book.name.toUpperCase().includes(nameOfBook.toUpperCase(), 0)) {
      shelfCode = book.shelf;
    }
  });
  return shelfCode;
}

function shelftashow(shelfCodeu) {
  for (let i = 0; i < shelfs.length; i++) {
    for (let j = 0; j < 5; j++) {
      if (shelfs[i][j].kod == shelfCodeu) {
        shelfs[i][j].show = true;
        break;
      }
    }
  }
}

createShelf();

let nameOfBook = prompt("Enter book names(Don't think of Everything, Think of a Number, Game of Thrones, The Lord of the Rings, Harry Potter ).");
let shelfCode = findCode(nameOfBook);

if (shelfCode != null) {
  shelftashow(shelfCode);
  createShelf();
} else {
  alert("The book you entered is not available in our library.");
}
