import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin user',
        email:'admin@gmail.com',
        password: bcrypt.hashSync('pass123',10),
        isAdmin: true
    },
    {
        name: 'John Snow',
        email:'andrew@gmail.com',
        password: bcrypt.hashSync('pass123', 10)
    },
    {
        name: 'Jane Snow',
        email:'brock@gmail.com',
        password: bcrypt.hashSync('pass123', 10)
    }
];

export default users;