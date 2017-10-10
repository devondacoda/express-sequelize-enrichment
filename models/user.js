const Sequelize = require('sequelize');
const db = require('./db');
const Award = require('./award');
const faker = require('faker');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  awards: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  mentor: {
    type: Sequelize.STRING
  }
});

// Award.belongsTo(User, {as: 'student'});
User.hasMany(Award, {as: 'award'});

User.findUsersViewModel = () => {
// return a promise so that the route (../routes/users) can '.then' off of promise
  return new Promise((resolve, reject) => {
    resolve({
      user: 'Enter a name'
    });

    reject(new Error('Could not find view model'));
  });
};

User.destroyById = (id) => {
  return User.destroy({
    where: {
      id: id
    }
  });
};

User.updateUserFromRequestBody = (id, content) => {
  return User.update(content, {
    where: {
      id: id
    }
  });
};

User.generateAward = (id) => {
  const selectedStudent = User.findById(id);
  const newAward = Award.create({ name: faker.company.catchPhrase() });

  return Promise.all([selectedStudent, newAward])
  .then(promisesArr => {
    const student = promisesArr[0];
    const award = promisesArr[1];
    student.addAward(award);
    // student.awards.push(award.name); // push new award into array first
    // student.update({awards: student.awards});   // then set that array as new student.awards
    // award.setStudent(student);
  });
};

User.removeAward = (userId, awardId) => {
  return Award.destroy({
    where: {
      id: awardId,
      userId: userId
    }
  });
//   const selectedStudent = User.findById(userId);
//   const selectedAward = Award.findById(awardId);

//   return Promise.all([selectedStudent, selectedAward])
//   .then(promisesArr => {
//     const student = promisesArr[0];
//     const award = promisesArr[1];

//     student.awards.splice(student.awards.indexOf(award.name), 1);
//     award.destroy();
//   });

};

module.exports = User;
