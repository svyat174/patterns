class Abstraction {
	protected implementation: Implementation
	
	constructor(implementation: Implementation) {
		this.implementation = implementation
	}

	public abstractOperation(): string {
		const result = this.implementation.operationImplementation()
		return `Abstraction: Base operation with:\n${result}`
	}
}

class ExtendedAbstraction extends Abstraction {
	public abstractOperation(): string {
		const result = this.implementation.operationImplementation()
		return `ExtendedAbstraction: Extended operation with:\n${result}`
	}
}

interface Implementation {
	operationImplementation(): string
}

class ConcreteImplementationA implements Implementation {
	operationImplementation(): string {
		return 'ConcreteImplementationA: Here\'s the result on the platform A.'
	}
}

class ConcreteImplementationB implements Implementation {
	operationImplementation(): string {
		return 'ConcreteImplementationA: Here\'s the result on the platform B.'
	}
}
 
const clientBridge = (abstraction: Abstraction): void => {
	console.log(abstraction.abstractOperation());
}

let implementation = new ConcreteImplementationA()
let abstraction = new Abstraction(implementation)
clientBridge(abstraction)

console.log('');

implementation = new ConcreteImplementationB()
abstraction = new ExtendedAbstraction(implementation)
clientBridge(abstraction)
