interface ComponentDecorator {
	operation(): string
}

class CreateComponent implements ComponentDecorator {
	public operation(): string {
		return `CreateComponent`
	}
}

class Decorator implements ComponentDecorator {
	protected component: ComponentDecorator

	constructor(component: ComponentDecorator) {
		this.component = component
	}

	public operation(): string {
		return this.component.operation()
	}
}

class ConcreteDecoratorA extends Decorator {
	public operation(): string {
		return `ConcreteDecoratorA(${super.operation()})`
	}
}

class ConcreteDecoratorB extends Decorator {
	public operation(): string {
		return `ConcreteDecoratorB(${super.operation()})`
	}
}

const clientDecorator = (component: ComponentDecorator) => console.log(component.operation());

const simpleEntity = new CreateComponent()
console.log('Client: I\'ve got a simple component:');
clientDecorator(simpleEntity)
console.log('');

const decorator1 = new ConcreteDecoratorA(simpleEntity)
const decorator2 = new ConcreteDecoratorB(decorator1)
console.log('Client: Now I\'ve got a decorated component:');
clientDecorator(decorator2)