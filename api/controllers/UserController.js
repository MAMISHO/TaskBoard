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
		console.log(user);
		return res.send(200, {user: newuser});
	}
};

