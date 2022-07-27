/*
THE NEVER TYPE
One of my favourite Typescript features. Anytime we are doing checks on a 'Discriminated Union' https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
We can use this for exhaustiveness checking. It essentially gives us a compile time checks for unhandled cases.
*/

const unreachableCaseError = (x: never): never => {
  throw Error(x);
};

interface UserUpdateEvent {
  eventType: "USER_UPDATED";
  parameters: {
    id: string;
    name: string;
    email: string;
    someThingElse: string;
  };
}

interface UserCreatedEvent {
  eventType: "USER_CREATED";
  parameters: {
    id: string;
    name: string;
    email: string;
  };
}

interface UserDeletedEvent {
  eventType: "USER_DELETED";
  parameters: {
    id: string;
  };
}

type BetterUserEvent = UserCreatedEvent | UserDeletedEvent | UserUpdateEvent;

const handleBetterUserEvent = (event: BetterUserEvent) => {
  if (event.eventType === "USER_CREATED") {
    console.log(event.parameters.name);
    return;
  }
  if (event.eventType === "USER_DELETED") {
    console.log(event.parameters.id);
    // Interface shows error instead of type.
    // console.log(event.parameters.name)
    return;
  }

  if (event.eventType === "USER_UPDATED") {
    console.log(event.parameters.id);
    // Interface shows error instead of type.
    // console.log(event.parameters.name)
    return;
  }

  unreachableCaseError(event);
};
