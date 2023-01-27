interface IMediator {
    notify(mediator: object, event: string): void
}

class ConcreteMediator implements IMediator {
    private component1: Component1

    private component2: Component2

    constructor(c1: Component1, c2: Component2) {
        this.component1 = c1
        this.component1.setMediator(this)
        this.component2 = c2
        this.component2.setMediator(this)
    }

    public notify(mediator: object, event: string): void {
        if (event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:');
            this.component2.doC()
        }

        if(event === 'D') {
            console.log('Mediator reacts on A and triggers following operations:');
            this.component1.doB()
            this.component2.doC()
        }
    }
}

class BaseComponent {
    protected mediator: IMediator

    constructor (mediator?: IMediator) {
        this.mediator = mediator!
    }

    public setMediator(mediator: IMediator) {
        this.mediator = mediator
    }
}

class Component1 extends BaseComponent {
    public doA(): void {
        console.log('Component 1 does A')
        this.mediator.notify(this, 'A')
    }

    public doB(): void {
        console.log('Component 1 does B')
        this.mediator.notify(this, 'B')
    }
}

class Component2 extends BaseComponent {
    public doC(): void {
        console.log('Component 2 does C')
        this.mediator.notify(this, 'C')
    }

    public doD(): void {
        console.log('Component 2 does D')
        this.mediator.notify(this, 'D')
    }
}

const componentOne = new Component1()
const componentTwo = new Component2()

const mediator = new ConcreteMediator(componentOne, componentTwo)

console.log('Client triggers operation A.');
componentOne.doA()

console.log('');
console.log('Client triggers operation D.');
componentTwo.doD()