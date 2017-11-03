/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type: 'integer',
      autoIncrement: true
    },
  	
    username : {
  		type: 'string',
      primaryKey: true,
      required: true
  	},

  	email : {
  		type: 'string',
      unique: true
  	},
  	
    password:{
  		type: 'string'
  	},

    userkind:{
      type: 'string',
      enum: ['user', 'admin']
    },

    projs:{
      collection: 'proj',
      via: 'users',
      dominant: true
    }
  }

};

