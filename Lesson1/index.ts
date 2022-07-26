const greeting: string = 'Hello, Laracasts!';

const year: number = 2021;

greeting.toLowerCase();

const addTwoNumbers = (a: number, b: number): number => a + b;

// Waste type system.
interface User {
    id: string;
    name: string;
}

// Waste type system.
interface Book {
    id: string;
    name: string;
    releaseDate?: Date;
}

const getUserById = (id:string): User => ({
    id,
    name: "Michael Timbs",
})

const getBookById = (id:string): Book => ({
    id,
    name: "Typescript is Best Script"
})

const user = getUserById('uuid-1')
const book = getBookById('uuid-1')

const saveUser = (user: User) => console.log('saving user', {
    prop1: user.id,
    prop2: user.name
});

const saveBook = (book: Book) => console.log('saving user', {
    prop1: book.id,
    prop2: book.name,
    prop3: book.releaseDate?.toISOString()
});

/* Satisfies the contract */
saveUser(user);
saveBook(book);