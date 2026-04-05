import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Book {
    title: string;
    content: string;
    isbn: bigint;
    author: string;
}
export interface PhonebookEntry {
    name: string;
    phone: string;
}
export interface backendInterface {
    addBook(isbn: bigint, title: string, content: string, author: string): Promise<void>;
    addOrUpdatePhonebookEntry(entry: PhonebookEntry): Promise<bigint>;
    getAllBooks(): Promise<Array<Book>>;
    getBook(isbn: bigint): Promise<Book | null>;
    getPhonebookEntries(nameFilter: string, phoneFilter: string): Promise<Array<PhonebookEntry>>;
    getPhonebookEntry(id: bigint): Promise<PhonebookEntry | null>;
    searchBooksByTitle(title: string): Promise<Array<Book>>;
}
