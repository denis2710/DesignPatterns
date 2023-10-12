import Order from "./order";

class FornitureOrder extends Order{
  private sectorName: string 

  constructor(){
    super()
    this.sectorName = 'Forniture'
  }
  
  public getSectorName() : string {
    return this.sectorName
  }
}

export default FornitureOrder