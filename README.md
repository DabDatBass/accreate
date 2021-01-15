# [Accreate Beta](https://github.com/DabDatBass/accreate)
---
![stars](https://flat.badgen.net/github/stars/DabDatBass/accreate) ![forks](https://flat.badgen.net/github/forks/DabDatBass/accreate) ![issues](https://flat.badgen.net/github/issues/DabDatBass/accreate) [![run on repl.it](https://repl.it/badge/github/DabDatBass/accreate)](https://repl.it/@DabDatBass/accreate) ![version](https://flat.badgen.net/github/release/DabDatBass/accreate)

Accreate is an account creator/manager that's really easy to use. To use Accreate, simply fork the repl on [repl.it](https://repl.it/@DabDatBass/accreate) or download the zip in the [GitHub](https://github.com/DabDatBass/accreate), then follow this simple tutorial below.

## How to use
##### To create an account, use `create()`.
Attributes:
- `acc` - account name
- `pass` - password

Return values:
- `null` - means it worked
- `"ERR"` - failed
- nothing - internal error

##### To edit/manage an account, use `request()`.
Attributes:
- `acc` - account name
- `pass` - password

Objects/functions:
- `changePass` - changes password. *(Attributes: x = new password)*
- `pfp` - returns profile picture
- `del` - deletes account
Coin Management (optional coin money):
- `input` - adds coins to your account 
- `coins` - returns coins amount
- `withdraw` - decreases coins amount
Followers (optional):
- `followControl` - controls followers. (Objects/functions: add (Attributes: user), sum, remove (Attributes: user))
File storage (optional):
- `file` - gets a file. (attributes: command = *[GET, EDIT, CREATE]*, filename, data (use data only when needed))

Return values:
- `null` - means it worked
- nothing - internal error
- other - probably worked.

## Getting user data without functions
Accreate uses repl.it's database for Node.JS. So, to get user data use:
```javascript
db.get(<accountname> + "-data-" + <datatype>).then(value => {});
```
If that doesn't work, use Node.JS to install the database.

---
## Conclusion
I have worked very hard on creating this. Please star this project on GitHub and if there are any errors/something isn't working please create an issue on the GitHub. Thanks and I hope you use it!
