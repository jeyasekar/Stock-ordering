export class OrderModel {
    constructor(public orderId?: number, public orderPlacedBy?: string, public description?: string, public orderedDate?: string, public orderTotalPrice?: number) {
        //console.log('product model created')
    }
}