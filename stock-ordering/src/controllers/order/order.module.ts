import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import FetchOrderService from 'src/core-domain/application-service/order/fetchorder.service';
import { Orders } from 'src/core-domain/entities/order/order.entity';
import { OrderRepository } from 'src/domain/adapters/order.repository';
import { OrderSettingConstants } from 'src/infrastructure/constants/order/order-setting';
import { OrderDatabaseModule } from 'src/infrastructure/database/order/order-database.module';
import { OrderController } from './order.controller';

@Module({
    imports: [
        HttpModule,
        OrderDatabaseModule,
        TypeOrmModule.forFeature([Orders])
    ],
    controllers: [OrderController],
    providers: [
        FetchOrderService,
        {
            provide: OrderSettingConstants.ORDER_SERVICE,
            useClass: OrderRepository
        },
        //HttpClient
    ],
})
export class OrderModule {
    constructor() {
        console.log('OrderModule created')
    }
};