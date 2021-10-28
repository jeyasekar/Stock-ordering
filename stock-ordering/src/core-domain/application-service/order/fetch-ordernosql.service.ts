import { Inject, Injectable } from "@nestjs/common";
import { OrderModel } from "src/core-domain/models/order/order.model";
import { IOrderPort } from "src/domain/ports/order.port";
import { OrderSettingConstants } from "src/infrastructure/constants/order/order-setting";
import { IBaseService } from "../base.service";


@Injectable()
export default class FetchOrdernosqlService implements IBaseService<number, OrderModel> {
    constructor(@Inject(OrderSettingConstants.ORDER_SERVICE) private orderService: IOrderPort) {
        console.log('FetchOrdernosqlService created')
    }
    handle(): Promise<OrderModel[]> {
        console.log("nosql adaptor")
        return this.orderService.fetchOrderNoSql()
    }
}