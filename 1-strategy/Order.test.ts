import EletronicOrder from "./EletronicOrders";
import FornitureOrder from "./FornitureOrders";

describe(('Strategy test to shipment: Shipment order'), () => {

  describe('Eletronic Orders', () => {
    let eletronicOrder: EletronicOrder; 
    beforeEach(() => {
      eletronicOrder = new EletronicOrder()
    })
    it('should be of Forniture sector', () => {
      expect(eletronicOrder.getSectorName()).toBe('Eletronic')
    }) 
    it('should have the shipment 5% of eletronic order value to common shipments', () => {
      eletronicOrder.setValue(500)
      const shipmentValue = eletronicOrder.calculateCommonShipment()
      expect(shipmentValue).toBe(25)
    })
    it('should have the shipment 10% of eletronic order value to express shipments', () => {
      eletronicOrder.setValue(500)
      const shipmentValue = eletronicOrder.calculateExpressShipment()
      expect(shipmentValue).toBe(50)
    })
  })

  describe('Furniture Orders', () => {
    let fornitureOrder: FornitureOrder; 
    beforeEach(() => {
      fornitureOrder = new FornitureOrder()
    })
    it('should be of Forniture sector', () => {
      expect(fornitureOrder.getSectorName()).toBe('Forniture')
    }) 
    it('should have the shipmment 5% of eletronic order value to common shipments', () => {
      fornitureOrder.setValue(500)
      const shipmentValue = fornitureOrder.calculateCommonShipment()
      expect(shipmentValue).toBe(25)
    })
    it('should have the shipmment 10% of eletronic order value to express shipments', () => {
      fornitureOrder.setValue(500)
      const shipmentValue = fornitureOrder.calculateExpressShipment()
      expect(shipmentValue).toBe(50)
    })
  })

});
