module.exports = function(app) {
    var User = app.models.User;
    let user_list = [
      {
        email: 'yourock@shoppinpal.com',
        password: 'test123'
      },
      {
        email: 'goodjob@shoppinpal.com',
        password: 'test123'
      },
      {
        email: "usertest123456@gmail.com",
        password: "test123456"
      }
    ];

    User.create(user_list, function(err, userInstance) {
      console.log('Test user created... You can use this user login credentials for testing..');
      console.log("{ email: usertest123456@gmail.com, password: test123456 }");
      console.log("{ email: goodjob@shoppinpal.com, password: test123 }");
      console.log("{ email: yourock@shoppinpal.com, password: test123 }");
    });
}