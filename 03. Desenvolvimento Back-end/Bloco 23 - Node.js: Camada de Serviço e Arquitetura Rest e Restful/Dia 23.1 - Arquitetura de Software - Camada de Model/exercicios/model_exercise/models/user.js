const connection = require('./connection');

const formatKeys = (userData) => ({
  firstName: userData.first_name,
  lastName: userData.last_name,
  email: userData.email,
  password: userData.password
});

const createUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';

  return await connection.execute(query, [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
};

const getUsers = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM model_exercise.user',
  );

  return users.map(formatKeys);
};

const findById = async (id) => {
  const query = 'SELECT * FROM user WHERE id = ?';
  const [userData] = await connection.execute(query, [id]);
  
  if (!userData) return null;

  return formatKeys(userData[0]);
};

const updateUser = async (id, firstName, lastName, email, password) => {
  const query = 'UPDATE user SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';

  await connection.execute(query, [firstName, lastName, email, password, id]);

  return findById(id);
}

module.exports = {
  formatKeys,
  createUser,
  getUsers,
  findById,
  updateUser
};
