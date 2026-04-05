import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import List "mo:core/List";

actor {
  // Book Definition
  type Book = {
    isbn : Nat;
    title : Text;
    content : Text;
    author : Text;
  };

  let books = Map.empty<Nat, Book>();

  // Add book to catalog
  // TODO([LM] 2024-02-02): Implement context field containing publisher and publication year
  public func addBook(isbn : Nat, title : Text, content : Text, author : Text) : async () {
    let newBook : Book = {
      isbn;
      title;
      content;
      author;
    };
    books.add(isbn, newBook);
  };

  // Get book by isbn
  public query func getBook(isbn : Nat) : async ?Book {
    books.get(isbn);
  };

  // Get all books
  public query func getAllBooks() : async [Book] {
    books.values().toArray();
  };

  // Search book by title
  // TODO([LM] 2024-02-02): Add support for author search
  public query func searchBooksByTitle(title : Text) : async [Book] {
    let results = List.empty<Book>();
    for ((isbn, book) in books.entries()) {
      if (book.title.contains(#text title)) {
        results.add(book);
      };
    };
    results.toArray();
  };

  //////////////////////////////////////////////////////////////////
  // Phonebook
  //////////////////////////////////////////////////////////////////

  type PhonebookEntry = {
    name : Text;
    phone : Text;
  };

  let phonebookEntries = Map.empty<Nat, PhonebookEntry>();
  var nextPhonebookEntryId = 0;

  // Add new entry to phonebook
  // TODO([LM] 2024-02-02): Add batch insert
  public func addOrUpdatePhonebookEntry(entry : PhonebookEntry) : async Nat {
    nextPhonebookEntryId += 1;
    phonebookEntries.add(nextPhonebookEntryId, entry);
    nextPhonebookEntryId;
  };

  // Get phonebook entry by id
  public query func getPhonebookEntry(id : Nat) : async ?PhonebookEntry {
    phonebookEntries.get(id);
  };

  // TODO([LM] 2024-02-02): Add typed queries for name and phone
  // Get filtered phonebook entries
  public query func getPhonebookEntries(nameFilter : Text, phoneFilter : Text) : async [PhonebookEntry] {
    let results = List.empty<PhonebookEntry>();
    for ((id, entry) in phonebookEntries.entries()) {
      if (entry.name.contains(#text nameFilter) and entry.phone.contains(#text phoneFilter)) {
        results.add(entry);
      };
    };
    results.toArray();
  };
};
