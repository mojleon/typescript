// Any vs unknown
// const logger = (something: unknown): void => console.log(something);
// logger('Laracasts Rules!');
// logger({foo: 'bar'});

// Any = turn of the type checker. Never use any always use unknown! Any allows all kind of bugs to the code. Try to never use it.
// const logger = (something: any): void => {
//     console.log(something.toUpperCase());
// }
// logger('Laracasts Rules!');
// logger({foo: 'bar'});

// Any = turn of the type checker.
// const logger = (something: unknown): void => {
//     if (typeof something === 'string')
//         console.log(something.toUpperCase());
//     else
//         console.log(something);
// }
// logger('Laracasts Rules!');
// logger({foo: 'bar'});








type anyType = { prop1: any; prop2: any }
const anyFoo: anyType = {
    prop1: 'hello',
    prop2: { foo: 'bar' }
} 


// console.log(anyFoo.prop2.whateverIWantBEcauseWeHaveTurnedOfTS.sososo.aaaa.fff.toUpperCase();)

type unknownType = { prop1: unknown; prop2: unknown}
const unknownFoo: unknownType = {
    prop1: 'hello',
    prop2: { foo: 'bar' }
}


if(
    unknownFoo.prop2 // check is not undefined
    && typeof unknownFoo.prop2 === 'object' // check is an object.
    && Object.hasOwnProperty.call(unknownFoo.prop2, 'foo'
    )
) {
    // as == casting something as object. We are telling that the foo exist. Type casting... only use it when you need to.
    console.log((unknownFoo.prop2 as {foo:unknown}).foo);
}


// HTMLCanvasElement extend HTMLElement. We are bassicaly saying that it build on top of the HTMLElement. You do this to tell the compiler that you have more knowledge then the compiler has.
const canvas = document.getElementById('my_canvas') as HTMLCanvasElement;