db = require('./models')

//create

db.user_fs.create(
    {userId: 3,
    friendshipId: 1,
    }
)
db.user_fs.create(
    {userId: 4,
    friendshipId: 1,
    }
)
db.user_fs.create(
    {userId: 3,
    friendshipId: 2,
    }
)
db.user_fs.create(
    {userId: 5,
    friendshipId: 2,
    }
)

// db.users.create(
//     {name: 'Eric',
//     email: 'email@email.com',
//     password: 'password',
//     secretpin: 'secret',
//     friends: [1,2,3]
//     }
// )

// db.users.create(
//     {name: 'Jeff',
//     email: 'email@email.com',
//     password: 'password',
//     secretpin: 'secret',
//     friends: [1,2,3]
//     }
// )

// db.users.create(
//     {name: 'Emily',
//     email: 'email@email.com',
//     password: 'password',
//     secretpin: 'secret',
//     friends: [1,2,3]
//     }
// )

// db.users.create(
//     {name: 'Karen',
//     email: 'email@email.com',
//     password: 'password',
//     secretpin: 'secret',
//     friends: [1,2,3]
//     }
// )

// db.users.create(
//     {name: 'Dweezil',
//     email: 'email@email.com',
//     password: 'password',
//     secretpin: 'secret',
//     friends: [1,2,3]
//     }
// )