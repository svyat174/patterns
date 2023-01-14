interface IPrototype<T> {
	clone: () => T
}

class Prototype implements IPrototype<Prototype> {
	private createdAt: Date;

	constructor(public email: string, public name: string) {
		this.createdAt = new Date()
	}
	
	public clone(): Prototype {
		const target = new Prototype(this.email, this.name)
		target.createdAt = this.createdAt
		return target
	}
}

const prototype1 = new Prototype('abc@cba.ru', 'name')
const prototype2 = prototype1.clone()
prototype2.email = 'svyatgluhov@gmail.com'
prototype2.name = 'Svyat Gluhov'
console.log(prototype1);
console.log(prototype2);