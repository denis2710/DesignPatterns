import Order from "./order";

describe(('Strategy test to shipment: Shipment order'), () => {
  let order: Order;
  beforeEach(() => {
    order = new Order()

  })
  it('should be 5% of order value to common shipments', () => {
    order.setValue(500)
    const shipmentValue = order.calculateCommonShipment()
    expect(shipmentValue).toBe(25)
  })
  it('should be 10% of order value to express shipments', () => {
    order.setValue(500)
    const shipmentValue = order.calculateExpressShipment()
    expect(shipmentValue).toBe(50)
  })
});
