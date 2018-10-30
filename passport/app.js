
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
db = require('./models');

const Op = db.sequelize.Op

db.users.findAll({
    
    include: [
        {
            model: db.friendship,
            through: 'user_fs',
            as: 'friend2',
            attributes: [
                'id'
            ],
            
            
        }
        
    ],
    where: {id: 3}

  }).then(posts => {
    console.log(posts[0].dataValues.friend2[0].dataValues)
  });



app.listen(3001);
