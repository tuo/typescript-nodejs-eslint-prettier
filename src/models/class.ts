import { Table, Column, Model, HasMany, AllowNull, Index, ForeignKey, BelongsTo} from 'sequelize-typescript'
import Teacher from './teacher'

@Table
class Class extends Model<Class> {
    
    @AllowNull(false)
    @Column
    name: string

    @Column
    num: number


    @ForeignKey(()=>Teacher)
    @Column
    teacherId: number;

    @BelongsTo(()=>Teacher, 'teacherId') //mutli
    teacher: Teacher
}

export default Class;