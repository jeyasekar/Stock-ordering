import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'master_json_data'
})
export class MasterNosql {
    constructor() {
        console.log('MasterNosql entity created')
    }
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'integer',
    })
    id: number;

    @Column({
        name: 'data',
        type: 'jsonb',
    })
    data: JSON;

    
}
