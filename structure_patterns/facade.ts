class Facade {
	protected subsystemOne: SubSystem1

	protected subsystemTwo: SubSystem2
	
	constructor(subsystemOne?: SubSystem1, subsystemTwo?: SubSystem2) {
		this.subsystemOne = subsystemOne || new SubSystem1()
		this.subsystemTwo = subsystemTwo || new SubSystem2()
	}

	public operation() {
		let result = 'Facade initializes subsystems:\n'
		result += this.subsystemOne.operation1()
		result += this.subsystemOne.operationN()
		result += 'Facade orders subsystems to perform the action:\n'
		result += this.subsystemTwo.operation1()
		result += this.subsystemTwo.operationZ()

		return result
	}
}

class SubSystem1 {
	public operation1() {
		return 'SubSystem1: Ready!\n'
	}
	
	public operationN() {
		return 'SubSystem1: Start!\n'
	}
}

class SubSystem2 {
	public operation1() {
		return 'SubSystem2: Ready!\n'
	}
	
	public operationZ() {
		return 'SubSystem2: Fire!\n'
	}
}

const clientFacade = (facade: Facade) => console.log(facade.operation())

const subsystemsOne = new SubSystem1()
const subsystemsTwo = new SubSystem2()
const facade = new Facade(subsystemsOne, subsystemsTwo)
clientFacade(facade)
