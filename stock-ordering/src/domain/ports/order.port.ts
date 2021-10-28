import { Optional } from "typescript-optional";
import { OrderModel } from "src/core-domain/models/order/order.model";

export interface IOrderPort {
    fetchOrders(): Promise<OrderModel[]>;

    addOrder(order: OrderModel): Promise<OrderModel>;

    fetchOrderNoSql(): Promise<OrderModel[]>;

}