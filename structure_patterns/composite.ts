abstract class Component {
	protected parent!: Component | null

	public setParent(parent: Component | null) {
		this.parent = parent
	}

	public getParent(): Component | null {
		return this.parent
	}

	public add(component: Component): void {}

	public remove(component: Component): void {}

	public isComposit(): boolean {
		return false
	}

	public abstract operation(): string
}

class Leaf extends Component {
	public operation(): string {
		return 'Leaf'
	}
}

class Composite extends Component {
	protected children: Component[] = []

	public add(component: Component) {
		this.children.push(component)
		component.setParent(this)
	}

	public remove(component: Component) {
		const compositeIndex = this.children.indexOf(component)
		this.children.splice(compositeIndex, 1)
		
		component.setParent(null)
	}

	public isComposit(): boolean {
		return true
	}

	public operation(): string {
		const res: string[] = []
		for(let child of this.children) {
			res.push(child.operation())
		}
		return `Brunch(${res.join('+')})`
	}
}

const clientComposite1 = (component: Component) => console.log(component.operation());

const simple = new Leaf()
console.log('Client: I\'ve got a simple component:');
clientComposite1(simple)
console.log('');

const tree = new Composite()
const brunch1 = new Composite()
const brunch2 = new Composite()
brunch1.add(new Leaf())
brunch1.add(new Leaf())
brunch2.add(new Leaf())
tree.add(brunch1)
tree.add(brunch2)
console.log('Client: Now I\'ve got a composite tree:');
clientComposite1(tree)
console.log('');

const clientComposite2 = (component1: Component, component2: Component) => {
	if(component1.isComposit()) {
		component1.add(component2)
	}
	console.log(`RESULT ${component1.operation()}`)
}

console.log('Client: I don\'t need to check the components classes even when managing the tree:');
clientComposite2(tree, simple)
