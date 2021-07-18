import Sequelize from "sequelize";
import { dbase } from "../config/database.js";

export const Todo = dbase.define("Todo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
});




