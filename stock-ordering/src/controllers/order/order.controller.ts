import { Body, Controller, Get, Post } from "@nestjs/common";
import FetchMasternosqlAdapter from "src/core-domain/application-service/order/fetch-ordernosql.service";
import FetchOrderService from "src/core-domain/application-service/order/fetchorder.service";


@Controller()
export class OrderController {
    constructor(
        private fetchOrderService: FetchOrderService,
        
        private fetchnoSqlMasterAdapter: FetchMasternosqlAdapter
    ) {
        console.log('orders service controller created')
    }

    @Get('/all')
    fetchOrders() {
        console.log('orders service controller fetchOrders method')

        return this.fetchOrderService.handle()

    }

    @Get('/nosql')
    getMasterDataNoSql(){
        console.log("nosql")
        return this.fetchnoSqlMasterAdapter.handle()
    }
}