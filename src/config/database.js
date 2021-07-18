import Sequelize from "sequelize";

export const dbase = new Sequelize(
    "seq1", "django", "password1", {
        host: "localhost",
        dialect: "postgres",
        operatorsAliases: 0,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idel: 10000
        }
    }
);




