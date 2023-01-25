'use strict';

const { connect } = require('mongoose');


const conectionDB = async () => {
  try {
    const db = await connect(process.env.MONGO_URL);
    console.log(` Connection success: ${db.connection.name}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = conectionDB;

 
