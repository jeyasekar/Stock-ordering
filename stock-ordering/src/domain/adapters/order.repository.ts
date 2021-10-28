import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IOrderRepository } from "src/domain/ports/order.repository";
import { OrderMapper } from "src/infrastructure/mapper/order/order.mapper";
import { Repository } from "typeorm";
import { Optional } from "typescript-optional";
import { Orders } from "src/core-domain/entities/order/order.entity";
import { OrderModel } from "src/core-domain/models/order/order.model";

@Injectable()
export class OrderRepository implements IOrderRepository {
    constructor(@InjectRepository(Orders) private OrderRepository: Repository<Orders>) {
        console.log('OrderRepository created')
    }
    async fetchOrders(): Promise<OrderModel[]> {
        const allOrders = await this.OrderRepository.find()
        return OrderMapper.toDomains(allOrders)
    }
    async addOrder(order: OrderModel): Promise<OrderModel> {
        throw new Error("Method not implemented.");
    }
}