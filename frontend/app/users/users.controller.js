export default function ($scope, Users) {
  let userRegister = {
    "username": 'test1234',
    "password": '1234',
    "email": 'test@test.se'
  };

  Users.register(JSON.stringify(userRegister)).
  then((success) => {
      console.log(success);
  }, (error) => {
    console.log(error);
  });
}