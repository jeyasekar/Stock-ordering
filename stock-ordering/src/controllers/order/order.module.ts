import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import FetchOrderService from 'src/core-domain/application-service/order/fetchorder.service';
import { Orders } from 'src/core-domain/entities/order/order.entity';
import { OrderRepository } from 'src/domain/adapters/order.repository';
import { OrderSettingConstants } from 'src/infrastructure/constants/order/order-setting';
import { OrderDatabaseModule } from 'src/infrastructure/database/order/order-database.module';
import { OrderController } from './order.controller';
import { ConfigService } from 'src/infrastructure/configuration/config.service';
import { WinstonLoggerModule } from 'src/infrastructure/logger/winston.logger.module';

@Module({
    imports: [
        WinstonLoggerModule.forRoot({ level: ConfigService.create().getLogLevel()}),
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