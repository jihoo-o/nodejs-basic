const jwt = require('jsonwebtoken');

const secret = 'secretKeyInServer';

const token = jwt.sign(
    {
        id: 'userId',
        isAdmin: true,
    },
    secret,
    { expiresIn: 2 }
);

// encoded -> decoded -> isAdmin: false -> re encoded -> jwt.verify catch an error
const edited =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDQ4MjExNDV9.eeSimSZgWftJ8bgUPBgUi8Fq1BwyDZ5I5zl0rzLYpJ4';

jwt.verify(token, secret, (error, decoded) => {
    console.log(error);
    console.log(decoded);
});

// After expiration date
setTimeout(() => {
    jwt.verify(token, secret, (error, decoded) => {
        console.log(error);
        console.log(decoded);
    });
}, 3000);

console.log(token);
