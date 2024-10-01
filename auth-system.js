class AuthSystem {
  constructor() {
    this.users = new Map();
  }

  register(username, password, name, email) {
    if (this.users.has(username)) {
      return "User already registered";
    }

    this.users.set(username, { password, name, email });

    return "Registration successful";
  }

  login(username, password) {
    const user = this.users.get(username);

    if (user && user.password === password) {
      return "Authentication successful";
    }

    return "Wrong username or password";
  }

  getUserInfo(username) {
    const user = this.users.get(username);

    if (user) {
      return {
        name: user.name,
        email: user.email
      };
    }

    return "User not found";
  }
}

const authSystem = new AuthSystem();

console.log(
  authSystem.register("user1", "password123", "Alice", "alice@example.com")
);
console.log(
  authSystem.register("user2", "mypassword", "Bob", "bob@example.com")
);
console.log(
  authSystem.register("user1", "newpassword", "Alice", "alice@example.com")
);

console.log(authSystem.login("user1", "password123"));
console.log(authSystem.login("user2", "wrongpassword"));

console.log(authSystem.getUserInfo("user1"));
console.log(authSystem.getUserInfo("user3"));
