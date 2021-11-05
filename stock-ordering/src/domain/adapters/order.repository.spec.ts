import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { OrderModel } from '..//../core-domain/models/order/order.model';
import { Orders } from '..//../core-domain/entities/order/order.entity';

import { Repository } from 'typeorm';
import { OrderRepository } from './order.repository';

const orderArray = [
    new OrderModel(2, 'jey', 'bread', '05-11-2021', 100),
    new OrderModel(3, 'jey two', 'bread two', '06-11-2021', 150)
]

describe('FetchOrderService', () => {
    let repository: OrderRepository;
    let repo: Repository<Orders>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                OrderRepository,
                {
                    provide: getRepositoryToken(Orders),
                    useValue: {
                        find: jest.fn().mockResolvedValue(orderArray),

                    },
                },
            ],
        }).compile();

        repository = module.get<OrderRepository>(OrderRepository);
        repo = module.get<Repository<Orders>>(getRepositoryToken(Orders));
    });


    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
    describe('fetchOrders', () => {
        it('should get a order Array', async () => {
            jest.spyOn(repo, 'find');
            const order = await repository.fetchOrders()
            expect(order).toEqual(orderArray);

        });
    });

});
