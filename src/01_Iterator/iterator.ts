interface Aggregate {
  iterator: () => object;
}

interface IteratorAnother {
  hasNext: () => boolean;
  nextA: () => object;
}

class Book {
  private name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}

class BookShelfIterator implements IteratorAnother {
  private bookShelf: BookShelf;
  private index: number;
  public constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }
  public hasNext(): boolean {
    return this.index < this.bookShelf.getLength();
  }
  public nextA(): Book {
    const book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}

class BookShelf implements Aggregate {
  private books: Book[];
  private last: number = 0;
  public constructor(maxsize: number) {
    this.books = Array(maxsize).map((): Book => new Book(""));
  }
  public getBookAt(index: number): Book {
    return this.books[index];
  }
  public appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last++;
  }
  public getLength(): number {
    return this.last;
  }
  public iterator(): BookShelfIterator {
    return new BookShelfIterator(this);
  }
}

// main処理
const bookShelf = new BookShelf(4);
bookShelf.appendBook(new Book("デザインパターン入門"));
bookShelf.appendBook(new Book("デザインパターン入門マルチスレッド編"));
bookShelf.appendBook(new Book("プログラマのための数学"));
bookShelf.appendBook(new Book("数学ガール"));
const it = bookShelf.iterator();
while (it.hasNext()) {
  const book = it.nextA();
  console.log(book.getName());
}
