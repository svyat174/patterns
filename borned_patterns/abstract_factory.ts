interface AbstractFactory {
	creteProductA(): AbstractProductA

	creteProductB(): AbstractProductB
}

class ConcreteFactory1 implements AbstractFactory {
	public creteProductA(): AbstractProductA {
		return new ConcreteProductA1
	}

	public creteProductB(): AbstractProductB {
		return new ConcreteProductB1
	}
}

class ConcreteFactory2 implements AbstractFactory {
	public creteProductA(): AbstractProductA {
		return new ConcreteProductA2
	}

	public creteProductB(): AbstractProductB {
		return new ConcreteProductB2
	}
}

interface AbstractProductA {
	usefulFunctionA(): string
}

class ConcreteProductA1 implements AbstractProductA {
	public usefulFunctionA(): string {
		return 'The result of the product A1'
	}
}

class ConcreteProductA2 implements AbstractProductA {
	public usefulFunctionA(): string {
		return 'The result of the product A2'
	}
}

interface AbstractProductB {
	usefulFunctionB(): string
  
	anotherUsefulFunctionB(collab: AbstractProductA): string
}

class ConcreteProductB1 implements AbstractProductB {
	public usefulFunctionB(): string {
		return 'The result of the product B1'
	}

	public anotherUsefulFunctionB(collab: AbstractProductA): string {
		const result = collab.usefulFunctionA()
		return `The result of the B1 collaborating with the ${result}`
	}
}

class ConcreteProductB2 implements AbstractProductB {
	public usefulFunctionB(): string {
		return 'The result of the product B2'
	}

	public anotherUsefulFunctionB(collab: AbstractProductA): string {
		const result = collab.usefulFunctionA()
		return `The result of the B2 collaborating with the ${result}`
	}
}

const clientAbstractFactory = (factory: AbstractFactory) => {
	const productA = factory.creteProductA()
	const productB = factory.creteProductB()

	console.log(productB.usefulFunctionB());
	console.log(productB.anotherUsefulFunctionB(productA));
}

clientAbstractFactory(new ConcreteFactory1())
clientAbstractFactory(new ConcreteFactory2())
