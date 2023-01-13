class Singleton {
	public static instance: Singleton

	constructor() {}

	public static getInstance() {
		if(!Singleton.instance) {
			this.instance = new Singleton()
		}
		return Singleton.instance
	}

	public someOperations() {
		console.log('It\'s singleton');
	}
}

const clientCode = () => {
	const instance1 = Singleton.getInstance()
	const instance2 = Singleton.getInstance()

	if (instance1 === instance2) {
		console.log('Singleton works, both variables contain the same instance.');
	} else {
		console.log('Singleton failed, variables contain different instances.');
	}
}

clientCode()