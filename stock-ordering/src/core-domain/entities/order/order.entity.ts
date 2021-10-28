import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'orders'
})
export class Orders {
    constructor() {
        console.log('Order entity created')
    }
    @PrimaryGeneratedColumn({
        name: 'orderId',
        type: 'integer',
    })
    orderId: number;

    @Column({
        name: 'orderPlacedBy',
        type: 'character varying',
    })
    orderPlacedBy: string;

    @Column({
        name: 'description',
        type: 'character varying',
    })
    description: string;

    @Column({
        name: 'orderedDate',
        type: 'character varying',
    })
    orderedDate: string;

    @Column({
        name: 'orderTotalPrice',
        type: 'integer',
    })
    orderTotalPrice: number;
}