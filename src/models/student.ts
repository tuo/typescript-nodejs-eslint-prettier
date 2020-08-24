import { Table, Column, Model, HasMany, AllowNull, Index, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table
class Student extends Model<Student> {
@AllowNull(false)

@Column

name: string ;
}

export default Student;
