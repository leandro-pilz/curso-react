const mongosse = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const conn = async () => {
  try {
    const dbConn = await mongosse.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.1alpofj.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("Conectou ao banco!");

    return dbConn;
  } catch (error) {
    console.log(`Falha na conexão: ${error}`);
  }
};

conn();

module.exports = conn;
