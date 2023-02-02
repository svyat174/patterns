class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
        console.log('Context: Sorting data using with strategy (not sure how I\'ll do it)');
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }
}

interface Strategy {
    doAlgorithm(data: string[]): string[];
}

class ConcreteStrategyA implements Strategy {
    doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class ConcreteStrategyB implements Strategy {
    doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

const ctx = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting');
ctx.doSomeBusinessLogic();

console.log('');

console.log('Client: Strategy is set to reverse sorting');
ctx.setStrategy(new ConcreteStrategyB());
ctx.doSomeBusinessLogic();