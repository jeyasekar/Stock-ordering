import { Inject, Injectable } from "@nestjs/common";
import { OrderModel } from "src/core-domain/models/order/order.model";
import { IOrderPort } from "src/domain/ports/order.port";
import { IBaseService } from "src/core-domain/application-service/base.service";
import { OrderSettingConstants } from "src/infrastructure/constants/order/order-setting";


@Injectable()
export default class FetchOrderService implements IBaseService<number, OrderModel> {
    constructor(@Inject(OrderSettingConstants.ORDER_SERVICE) private orderRepoPort: IOrderPort) {
        console.log('FetchProductsAdapter created')
    }
    handle(): Promise<OrderModel[]> {
        return this.orderRepoPort.fetchOrders()
    }
}