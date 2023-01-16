class Target {
	public request(): string {
		return 'Target: The default target\'s behavior.'
	}
}

class Adaptee {
	public specialRequest(): string {
		return '.eetpadA eht fo roivaheb laicepS'
	}
}

class Adapter extends Target {
	private adaptee: Adaptee

	constructor(adaptee: Adaptee) {
		super()
		this.adaptee = adaptee
	}

	public request(): string {
		const res = this.adaptee.specialRequest().split('').reverse().join('')
		return `Adapter: (TRANSLATED) ${res}`
	}
}

const clientAdapter = (target: Target) => {
	console.log(target.request());
}

const target = new Target()
console.log('Client: I can work just fine with the Target objects:');
clientAdapter(target)

console.log('');

const adaptee = new Adaptee()
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specialRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee)
clientAdapter(adapter)