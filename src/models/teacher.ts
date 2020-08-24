import { Table, Column, Model, HasMany } from 'sequelize-typescript';

import Class from './class';

@Table({
  timestamps: true,
})
class Teacher extends Model<Teacher> {
  @Column
  first: string;

  @Column
  last: string;

  @HasMany(() => Class)
  classes: Class[];
}

export default Teacher;
