/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {

 	userRegister: function(req, res, cb){
 		var newuser  = req.params.all();
 		console.log("user");
 		console.log(newuser);

 		var user = new User._model();
 		user.username = newuser.userName;
 		user.email 	  = newuser.email;
 		user.password = newuser.password;

 		User.findOne({ username: user.username }).exec(function (err, userExist){
 			if (err) {
 				return res.serverError(err);
 			}

 			if (userExist === undefined) {

 				User.create(user).exec(function (err, newUser){

 					if (err) { return res.serverError(err); }

 					sails.log('Finn\'s id is:', newUser.id);
 					//return res.ok();
 					 return res.send(200, {user: newuser});
 		});
 			}else{
 				return res.json(500, {error: "El usuario " + userExist.username + " ya existe"});	
 			}
 			
 		});

 		
 	}
 };

