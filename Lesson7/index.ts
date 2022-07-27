const userCreatedEvent = {
    eventType: 'USER_CREATED',
    parameters: {
        id: 'uuid-1',
        name: 'Michael',
        email: 'hello@email.com'
    }
}

const userDeletedEvent = {
    eventType: 'USER_DELETED',
    parameters: {
        id: '1'
    }
}

// HOW WOULD WE TYPE THESE?
interface UserEvent {
    eventType: 'USER_CREATED' | 'USER_DELETED',
    parameters: {
        id: string;
        name?: string;
        email?: string;
    }
}

// IT BECOMES REALLY HARD TO DESCRIMINATE ON A PARTICULAR EVENT
const handleUserEvent = (event: UserEvent) => {
    if(event.eventType === 'USER_CREATED') {
        // Do something with a USER_CREATED event
        console.log(event.parameters.name);
        return
    }
    if(event.eventType === 'USER_DELETED') {
        // Do something with a USER_DELETED event
        console.log(event.parameters.id)
        console.log(event.parameters.name)
        return
    }
}

interface userCreatedEvent {
    eventType: 'USER_CREATED',
    parameters: {
        id: string,
        name: string,
        email: string
    }
}

interface userDeletedEvent {
    eventType: 'USER_DELETED',
    parameters: {
        id: string,
    }
}

type BetterUserEvent = userCreatedEvent | userDeletedEvent;

const handleBetterUserEvent = (event: BetterUserEvent) => {
    if(event.eventType === 'USER_CREATED') {
        console.log(event.parameters.name);
        return
    }
    if(event.eventType === 'USER_DELETED') {
        console.log(event.parameters.id)
        // Interface shows error instead of type. 
        // console.log(event.parameters.name)
        return
    }
}

const userEvent = userCreatedEvent;
