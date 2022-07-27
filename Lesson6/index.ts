/* Interfaces can only be an object type */
interface User {
    id: string,
    name: string
}

type OtherUser = {
    id: string,
    name: string,
}

const user1: User = {
    id: '1',
    name: 'Michael'
}

const user2: OtherUser = {
    id: '1',
    name: 'Michael',
}

console.log(user1, user2);

/* 
    - WHICH ONE SHOULD WE USE?
    - Use types for unions and intersections
    - Key differences
        - Interfaces are guaranteed to be 'named' in error message, whereas type aliases are not
        - Interfaces cannot be used to rename primitives or literal types
        - Type aliases cannot participate in declaration merging but interfaces can
*/

// UNION
type Suit = 'CLUBS' | 'DIAMONDS' | 'HEARTS' | 'SPADES'
const card: Suit = 'HEARTS'
console.log(card)


// INTERSACTION
interface Timestamps {
    createdAt: Date,
    updatedAt: Date,
}

type PersistedUser = User & Timestamps
const persisted: PersistedUser = {
    id: 'uuid-1',
    name: 'Michael',
    createdAt: new Date(),
    updatedAt: new Date(),
}

console.log(persisted);

// RENAMING PRIMITIVES
type customString = string;
type AliasUser = User;
const nice: customString = 'not bad kid.'
console.log(nice)

// Type can't be wrapping in curly brackets as an object, only interfaces can.
// type Heart = {'HEARTS'}

// DECLARATION MERGING
interface MergeUser {
    id: string;
    name: string;
}

// You can define a interface twice.
interface MergeUser {
    age: number
}

const merged: MergeUser = {
    id: '1',
    name: 'Michael',
    age: 29,
}

console.log(merged);

// EXTENDING INTERFACES
