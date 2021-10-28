import { Inject, Injectable } from "@nestjs/common";
import { OrderModel } from "src/core-domain/models/order/order.model";
import { IOrderRepository } from "src/domain/ports/order.repository";
import { IBaseService } from "src/core-domain/application-service/base.service";
import { OrderSettingConstants } from "src/infrastructure/constants/order/order-setting";


@Injectable()
export default class FetchOrderService implements IBaseService<number, OrderModel> {
    constructor(@Inject(OrderSettingConstants.PRODUCTS_SERVICE) private orderRepoPort: IOrderRepository) {
        console.log('FetchProductsAdapter created')
    }
    handle(): Promise<OrderModel[]> {
        return this.orderRepoPort.fetchOrders()
    }
}