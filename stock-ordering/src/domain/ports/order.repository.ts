import { Optional } from "typescript-optional";
import { OrderModel } from "src/core-domain/models/order/order.model";

export interface IOrderRepository {
    fetchOrders(): Promise<OrderModel[]>;

    addOrder(order: OrderModel): Promise<OrderModel>;

}