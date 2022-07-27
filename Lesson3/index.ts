// Literal Type
const flipCoin = (): 'Head'|'Tail' => Math.random() < 0.5 ? 'Head' : 'Tail'
console.log(flipCoin())

enum Suit {
    HEARTS,
    SPADES,
    DIAMONDS,
    CLUBS,
}

/* Aliasing to the type of suit */
// type Suit = 'hearts' | 'spades' | 'diamonds' | 'clubs'

console.log(Suit.SPADES)

const suitMeaning = (suit: Suit) => {
    if(Suit.HEARTS === suit) return 'The clergy and the struggle to achieve inner joy'
    if(Suit.SPADES === suit) return 'The warrior class institutionalised into the nobility, and the fractious problems of life'
    if(Suit.DIAMONDS === suit) return 'The merchant class and the excittement of wealth creation'
    if(Suit.CLUBS === suit) return 'The peasantry and achievement through work'
    return 'nothing?'
}

console.log(suitMeaning(Suit.HEARTS));