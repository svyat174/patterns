interface Handler {
    setNext(handler: Handler): Handler

    handle(request: string): string | null
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler

    setNext(nextHandler: Handler): Handler {
        this.nextHandler = nextHandler
        return nextHandler
    }

    handle(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request)
        }

        return null
    }
}

class MonkeyHandler extends AbstractHandler {
    handle(request: string): string | null {
        if (request === 'Banana') {
            return `Monkey: I'll eat the ${request}.`
        }

        return super.handle(request)
    }
}

class SquirrelHandler extends AbstractHandler {
    handle(request: string): string | null {
        if (request === 'Nut') {
            return `Squirrel: I'll eat the ${request}.`
        }

        return super.handle(request)
    }
}

class DogHandler extends AbstractHandler {
    handle(request: string): string | null {
        if (request === 'Bone') {
            return `Dog: I'll eat the ${request}.`
        }

        return super.handle(request)
    }
}

const clientChain = (handler: Handler) => {
    const foods = ['Banana', 'Nut', 'Coffee']

    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`)

        const result = handler.handle(food)
        if(result) {
            console.log(` ${result}`)
        } else {
            console.log(` ${food} was left untouched.`)
        }
    }
}

const monkey = new MonkeyHandler()
const squirrel = new SquirrelHandler()
const dog = new DogHandler()

monkey.setNext(squirrel).setNext(dog)

console.log('Chain: Monkey > Squirrel > Dog\n')
clientChain(monkey)
console.log('')

console.log('Chain: Squirrel > Dog\n')
clientChain(squirrel)
console.log('')
