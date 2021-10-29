import { Body, Controller, Get, Post, UseFilters } from "@nestjs/common";
import FetchMasternosqlAdapter from "src/core-domain/application-service/order/fetch-ordernosql.service";
import FetchOrderService from "src/core-domain/application-service/order/fetchorder.service";
import { HttpExceptionFilter } from "src/infrastructure/Exception-filter/http.exception.filter";
import { WinstonLoggerService } from "src/infrastructure/logger/winston-logger.service";

@UseFilters(new HttpExceptionFilter())
@Controller()
export class OrderController {
    constructor(
        private fetchOrderService: FetchOrderService,
        private logger: WinstonLoggerService,
        private fetchnoSqlMasterAdapter: FetchMasternosqlAdapter
    ) {
        this.logger.setContext(OrderController.name);
        console.log('orders service controller created')
    }

    @Get('/all')
    fetchOrders() {
        console.log('orders service controller fetchOrders method')

        return this.fetchOrderService.handle()

    }

    @Get('/nosql')
    getMasterDataNoSql() {
        console.log("nosql")
        console.log('Master service controller fetchMasterData method')
        this.logger.info('in fetchMasterData info', { key: 'value' });
        this.logger.error('in fetchMasterData error', { key: 'value' });
        this.logger.debug('in fetchMasterData debug', { key: 'value' });
        this.logger.warn('in fetchMasterData warn', { key: 'value' });
        return this.fetchnoSqlMasterAdapter.handle()
    }
}