import { DataTypes, Model } from "sequelize";
import { sequelize } from ""; // Import sequelize instance from the database file

class User extends Model {
    public id!: number;
    public username!: string;
    public password!: string;
}

// USERNAME UNIQUE OR NO?
User.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        username: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false,

    }
);

export default User;