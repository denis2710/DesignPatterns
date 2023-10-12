import Order from "./order"

class EletronicOrder extends Order{
  private sectorName: string 

  constructor(){
    super()
    this.sectorName = 'Eletronic'
  }
  
  public getSectorName() : string {
    return this.sectorName
  }
  

}

export default EletronicOrder