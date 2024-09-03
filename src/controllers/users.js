const getUsers = (request, response) => {};

const getUser = (request, response) => {
  const { user_id } = request.params;
  response.status(200);
  response.send(`User ID:${user_id}`);
};

const createUser = (request, response) => {};

const editUser = (request, response) => {};

const deleteUser = (request, response) => {};

module.exports = {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  editUser,
};
