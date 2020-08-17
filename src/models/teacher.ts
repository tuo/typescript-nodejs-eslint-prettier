
import { Model, DataTypes, Sequelize } from 'sequelize';
class Teacher extends Model {
    public first!: string
    public last!: string
    // Auto-generated
    public id!: number
    public createdAt!: Date;
    public updatedAt!: Date;

    public static initialize(sequelize: Sequelize) {
        this.init({
            first: DataTypes.STRING,
            last: DataTypes.STRING
        }, {sequelize})
    }
}

export default Teacher