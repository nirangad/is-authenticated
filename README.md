# is-authenticated

Simple middleware for Express to validate JSON web token

## Usage

Make sure to set SECRET_KEY environment variable which used to be passed to
jwt.verify as jwt.Secret or jwt.GetPublicKeyOrSecret

### Setting environment variable

```sh
# In .env file
SECRET_KEY="SECRET_KEY"

```

### Preparing the JWT token

```sh
import jwt from "jsonwebtoken";

...

const token = jwt.sign(
  {
    id: user.id,
    email: user.email,
    timestamp: Date.now()
  },
  process.env.SECRET_KEY,
  {
    expiresIn: "10h"
  }
);
```

### Using isAuthenticate in Express endpoint

```sh
# Express Routes
app.get("/product", isAuthenticated, (req, res) => {
  return res.json({ status: 1, message: "Welcome to Product Service" });
});

```
