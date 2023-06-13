import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: process.env.MYSQL_DATABASE_NAME,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
});

export default sequelize;
