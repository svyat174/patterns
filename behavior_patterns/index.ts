interface Mediat {
    notify(sender: object, event: string): void
}

class ConcreteMediat implements Mediat {
    private component1: ComponentOne

    private component2: ComponentTwo

    constructor(c1: ComponentOne, c2: ComponentTwo) {
        this.component1 = c1
        this.component1.setMediator(this)
        this.component2 = c2
        this.component2.setMediator(this)
    }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:');
            this.component2.doC()
        }

        if (event === 'D') {
            console.log('Mediator reacts on D and triggers following operations:');
            this.component1.doB()
            this.component2.doC()
        }
    }

}

class BaseComponen {
    protected mediator: Mediat

    constructor(mediator?: Mediat) {
        this.mediator = mediator!
    }

    public setMediator(mediator: Mediat) {
        this.mediator = mediator
    }
}

class ComponentOne extends BaseComponen {
    public doA(): void {
        console.log('Component 1 does A.')
        this.mediator.notify(this, 'A')
    }

    public doB(): void {
        console.log('Component 1 does B.')
        this.mediator.notify(this, 'B')
    }
}

class ComponentTwo extends BaseComponen {
    public doC(): void {
        console.log('Component 2 does C.')
        this.mediator.notify(this, 'C')
    }

    public doD(): void {
        console.log('Component 2 does D.')
        this.mediator.notify(this, 'D')
    }
}

const component1 = new ComponentOne()
const component2 = new ComponentTwo()
const mediator1 = new ConcreteMediat(component1, component2)

console.log('Client triggers operation A.');
component1.doA()

console.log('');
console.log('Client triggers operation D.');
component2.doD()