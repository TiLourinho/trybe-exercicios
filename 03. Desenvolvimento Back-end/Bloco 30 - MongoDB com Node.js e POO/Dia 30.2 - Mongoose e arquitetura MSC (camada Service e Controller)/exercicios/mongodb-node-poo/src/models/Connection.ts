import 'dotenv/config';
import mongoose from 'mongoose';

// const options = {
//   user: `${process.env.MONGO_INITDB_ROOT_USERNAME}`, // Usuário do banco de dados.
//   pass: `${process.env.MONGO_INITDB_ROOT_PASSWORD}`, // senha do usuário do banco de dados.
//   autoIndex: false, // Não cria index para cada inserção de dado no banco.
//   dbName: `${process.env.MONGO_INITDB_DATABASE}`, // Define qual banco de dados vou utilizar.
// };

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || 'mongodb://localhost:27017/glassesStore',
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;

// Conexão do Docker
// mongodb://root:password@localhost:27017/glassesStore?authSource=admin

// localhost
// mongodb://127.0.0.1:27017/glassesStore'