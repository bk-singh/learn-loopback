module.exports = function(app) {
    var User = app.models.User;
    User.create({ email: "usertest123456@gmail.com", password: "test123456" }, function(err, userInstance) {
      console.log('Test user created... You can use this user credentials for testing..');
      console.log("{ email: usertest123456@gmail.com, password: test123456 }");
    });
}