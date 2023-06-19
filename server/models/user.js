const users = [
  { id: 1, username: "user1", password: "12345" },
  { id: 2, username: "user2", password: "12345" },
];

module.exports = class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  findOne = function (username, password) {
    return users.find((u) => u.username == username && u.password == password);
  };

  findById = function (userId) {
    return users.find((u) => u.id == userId);
  };
};
