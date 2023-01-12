interface Ibuilder {
  addFirstMethod(): void;
  addSecondMethod(): void;
  addThirdMethod(): void;
}

class ConcreteBuilder implements Ibuilder {
  private product: ProductM;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new ProductM();
  }

  addFirstMethod(): void {
    this.product.parts.push("First Product");
  }
  addSecondMethod(): void {
    this.product.parts.push("Second Product");
  }
  addThirdMethod(): void {
    this.product.parts.push("Third Product");
  }

  public getNewProd(): ProductM {
    const res = this.product;
    this.reset();
    return res;
  }
}

class ProductM {
  public parts: string[] = [];

  public getString() {
    console.log(`Product parts: ${this.parts.join(", ")}`);
  }
}

class DirectorM {
  private builder: Ibuilder;

  public setBuilder(builder: Ibuilder) {
    this.builder = builder;
  }

  public setEasyContainerBuilder() {
    this.builder.addFirstMethod();
  }

  public setHardContainerBuilder() {
    this.builder.addFirstMethod();
    this.builder.addSecondMethod();
    this.builder.addThirdMethod();
  }
}

function implementedLogic(director: DirectorM) {
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log("Easy---------------------------->");
  director.setEasyContainerBuilder();
  builder.getNewProd().getString();

  console.log("Hard---------------------------->");
  director.setHardContainerBuilder();
  builder.getNewProd().getString();

  console.log("Other---------------------------->");
  builder.addFirstMethod();
  builder.addThirdMethod();
  builder.getNewProd().getString();
}

const newDirector = new DirectorM();
implementedLogic(newDirector);
