import Order from "./Order"

class EletronicOrder extends Order{
  private sectorName: string 

  constructor(){
    super()
    this.sectorName = 'Eletronic'
  }
  
  public getSectorName() : string {
    return this.sectorName
  }
  
  public calculateCommonShipment = () => {
    return this.getValue() * 0.05
  }
  public calculateExpressShipment = () => {
    return this.getValue() * 0.10
  }
}

export default EletronicOrder