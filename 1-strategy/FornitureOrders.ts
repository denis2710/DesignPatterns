import Order from "./Order";

class FornitureOrder extends Order{
  private sectorName: string 

  constructor(){
    super()
    this.sectorName = 'Forniture'
  }
  
  public getSectorName() : string {
    return this.sectorName
  }

  public calculateCommonShipment = () => {
    return this.getValue() * 0.05
  }

  public calculateExpressShipment = () => {
    throw new Error('Forbiden shipment')
  }
}

export default FornitureOrder