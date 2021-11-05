import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IOrderPort } from "src/domain/ports/order.port";
import { OrderMapper } from "..//../infrastructure/mapper/order/order.mapper";
import { Repository } from "typeorm";
import { Optional } from "typescript-optional";
import { Orders } from "..//..//core-domain/entities/order/order.entity";
import { OrderModel } from "src/core-domain/models/order/order.model";
import { MasterNosql } from "..//..//core-domain/entities/order/master.nosql.entity";
/**
 * 
 */
@Injectable()
export class OrderRepository implements IOrderPort {
    constructor(@InjectRepository(Orders) private OrderRepository: Repository<Orders>) {
        console.log('OrderRepository created')
    }
    async fetchOrders(): Promise<OrderModel[]> {
        const allOrders = await this.OrderRepository.find()
        return OrderMapper.toDomains(allOrders)
    }
    /**
     * Add Order method will persist Order details in DB
     * @param order type of OrderModel
     */
    async addOrder(order: OrderModel): Promise<OrderModel> {
        throw new Error("Method not implemented.");
    }
    /**
     * 
     * @returns key value pair Shop Info
     */
    async fetchOrderNoSql(): Promise<OrderModel[]> {
        console.log('allb4')
      // const allMaster = await this.masterNoSqlRepository.find()
        //console.log('all++++',allMaster)
        return null;
    }
}