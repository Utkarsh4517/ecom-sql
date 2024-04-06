import { DataTypes } from 'sequelize';
import db from './index.js';


const Agency = db.sequelize.define('Agency', {
    agency_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    agency_name: {
        type: DataTypes.STRING
    },
    agency_gst_number: {
        type: DataTypes.STRING,
        unique: true
    },
    agency_email: {
        type: DataTypes.STRING,
        unique: true
    }
})

db.sequelize.sync();
export default Agency;