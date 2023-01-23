interface IHandler {
    setNext(handler: IHandler): IHandler

    handle(request: string): string | null
}

abstract class AbstractHandler1 implements IHandler {
    private nextHandler: IHandler

    setNext(nextHandler: IHandler): IHandler {
        this.nextHandler = nextHandler
        return nextHandler
    }

    handle(request: string): string | null {
        if(this.nextHandler) {
            return this.nextHandler.handle(request)
        }

        return null
    }
}

class MonkeyHandlerr extends AbstractHandler1 {
    public handle(request: string): string | null {
        if(request === 'Banana') {
            return `Monkey: I'll eat the ${request}.`
        }
        return super.handle(request)
    }
}

class SquirrelHandlerr extends AbstractHandler1 {
    public handle(request: string): string | null {
        if(request === 'Nut') {
            return `Squirrel: I'll eat the ${request}.`
        }
        return super.handle(request)
    }
}

class DogHandlerr extends AbstractHandler1 {
    public handle(request: string): string | null {
        if(request === 'Dog') {
            return `Squirrel: I'll eat the ${request}.`
        }
        return super.handle(request)
    }
}

const clientCh = (handler: IHandler) => {
    const arr = ['Banana', 'Nut', 'Coffee']
    for (const a of arr) {
        console.log(`Client: Who wants a ${a}?`);

        const res = handler.handle(a)
        if (res) {
            console.log(`   ${res}`)
        } else {
            console.log(`  ${a} was left untouched.`)
        }
    }
}

const monkey1 = new MonkeyHandlerr();
const squirrel1 = new SquirrelHandlerr();
const dog1 = new DogHandlerr();

monkey1.setNext(squirrel1).setNext(dog1)

clientCh(monkey1);

clientCh(squirrel1)