interface IFactoryInsurance {
  operation(): string;
}

class ABInsurance implements IFactoryInsurance {
  operation(): string {
    return "AB insurance";
  }
}

class CDInsurance implements IFactoryInsurance {
  operation(): string {
    return "CD insurance";
  }
}

abstract class CreateInsurance {
  public abstract fabricMethod(): IFactoryInsurance;

  public someOperations() {
    const ins = this.fabricMethod();
    return `Was create ${ins.operation()}`;
  }
}

class ABInsuranceCreate extends CreateInsurance {
  public fabricMethod(): IFactoryInsurance {
    return new ABInsurance();
  }
}

class CDInsuranceCreate extends CreateInsurance {
  public fabricMethod(): IFactoryInsurance {
    return new CDInsurance();
  }
}

function client(creator: CreateInsurance) {
  console.log(creator.someOperations());
}

client(new ABInsuranceCreate());
client(new CDInsuranceCreate());
