import { Body, Controller, Get, Post } from "@nestjs/common";
import FetchOrderService from "src/core-domain/application-service/order/fetchorder.service";


@Controller()
export class OrderController {
    constructor(
        private fetchOrderService: FetchOrderService,

    ) {
        console.log('orders service controller created')
    }

    @Get('/all')
    fetchOrders() {
        console.log('orders service controller fetchOrders method')

        return this.fetchOrderService.handle()

    }
}