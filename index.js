const Database = require("@replit/database")
const db = new Database()
const bcrypt = require('bcrypt');
const saltRounds = 9;

function request(acc,pass) {
  db.get(acc).then(value => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (!(err)) {
        bcrypt.hash(pass, salt, (err, hash) => {
          if (!(err)) {
            bcrypt.compare(value, hash, function(err, res) {
              if (res == true) {
                return {
                  changePass: function (x) {
                    bcrypt.genSalt(saltRounds, (err, salt) => {                        
                      if (!(err)) {
                        bcrypt.hash(x, salt, (err, hash) => {
                          if (!(err)) {
                            db.set(acc, hash).then(() => {
                            return x;
                            });
                          }
                        });
                      }
                    });
                  },
                  input: function (a) {
                    db.get(acc + "-data-coins").then(value => {
                      db.set(acc + "-data-coins", value + a).then(() => {
                        return null;
                      });
                    });
                  },
                  coins: function () {
                    db.get(acc + "-data-coins").then(value => {
                      return value;
                    });
                  },
                  withdraw: function (a) {
                    db.get(acc + "-data-coins").then(value => {
                      db.set(acc + "-data-coins", value - a).then(() => {
                        return null;
                      });
                    });
                  },
                  pfp: function () {
                    db.get(acc + "-data-pfp").then(value => {
                      return value;
                    });
                  },
                  followControl: function () {
                    return {
                      add: function (user) {
                        db.get(acc + "-data-followers").then(value => {                            var data = value;
                          data.push(user)
                          db.set(acc + "-data-followers", data).then(() => {
                            return null;
                          });
                        });
                      },
                      sum: function () {
                        db.get(acc + "-data-followers").then(value => {
                          var data = value;
                          return data.length;
                        });
                      },
                      remove: function (user) {
                        db.get(acc + "-data-followers").then(value => {
                          var data = value;
                          data.splice(data.indexOf(user), 1);
                          db.set(acc + "-data-followers", data).then(() => {
                            return null;
                          });
                        });
                      }
                    }
                  },
                  file: function (command, filename, data) {
                    if (command == "GET") {
                      db.get(acc + "-data-" + filename).then(value => {
                        return value;
                      });
                    }
                    if (command == "EDIT") {
                      db.get(acc + "-data-" + filename).then(value => {
                        db.set(acc + "-data-" + filename, data).then(() => {
                          return null;
                        });
                      });
                    }
                    if (command == "CREATE") {
                      db.set(acc + "-data-" + filename, data).then(() => {
                          return null;
                      });
                    }
                  },
                  del: function () {
                    db.delete(acc).then(() => {
                      return null;
                    });
                  }
                }
              }
            });
          }
        });
      }
    });
  });
}
function create(acc, pass) {
  try {
    db.get(acc).then(value => {});
  } catch (e) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (!(err)) {
        bcrypt.hash(pass, salt, (err, hash) => {
          if (!(err)) {
            db.set(acc, hash).then(() => {
              return null;
            });
          }
        });
      }
    });
  } else {
    return "ERR";
  }
}