class Order{
  private value: number

  public getValue = () => {
    return this.value
  }
  
  public setValue = (value: number) => {
    this.value = value
  }

  public calculateExpressShipment = () =>{
    return this.value * 0.10
  }
  public calculateCommonShipment = () =>{
    return this.value * 0.05
  }
}

export default Order
