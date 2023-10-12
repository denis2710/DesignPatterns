abstract class Order{
  private value: number

  public getValue = () => {
    return this.value
  }
  
  public setValue = (value: number) => {
    this.value = value
  }

  public abstract calculateExpressShipment: () => number
  public abstract calculateCommonShipment: () => number

}

export default Order
