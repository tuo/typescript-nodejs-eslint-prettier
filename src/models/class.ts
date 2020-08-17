import {
    Association, DataTypes, Model, Sequelize,
    BelongsToCreateAssociationMixin,
    BelongsToGetAssociationMixin,
    BelongsToSetAssociationMixin,
    BelongsToManyAddAssociationMixin,
    BelongsToManyAddAssociationsMixin,
    BelongsToManyCountAssociationsMixin,
    BelongsToManyCreateAssociationMixin,
    BelongsToManyGetAssociationsMixin,
    BelongsToManyHasAssociationMixin,
    BelongsToManyHasAssociationsMixin,
    BelongsToManyRemoveAssociationMixin,
    BelongsToManyRemoveAssociationsMixin,
    BelongsToManySetAssociationsMixin
} from 'sequelize'


import Teacher from './teacher'

class Class extends Model {
    public name!: string

    // Auto-generated
    public id!: number
    public createdAt!: Date
    public updatedAt!: Date

    // teacher
    public createTeacher!: BelongsToCreateAssociationMixin<Teacher>
    public getTeacher!: BelongsToGetAssociationMixin<Teacher>
    public setTeacher!: BelongsToSetAssociationMixin<Teacher, number>

    // populated for inclusion
    public readonly Teacher?: Teacher

    public static associations: {
        Teacher: Association<Class, Teacher>
    }
    public static initialize(sequelize: Sequelize) {
        this.init({
            name: DataTypes.STRING
        }, {
            sequelize,
            name: {
                singular: 'Class',
                plural: 'Classes'
            }
        })
    }
}

export default Class;