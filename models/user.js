/// ///////////////////////////////////////////
// Import Dependencies
/// ///////////////////////////////////////////
const mongoose = require('mongoose')

/// /////////////////////////////////////////////
// Define Model
/// /////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose

// make fruits schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

// make fruit model
const User = model('User', userSchema)
module.exports = User
/// ////////////////////////////////////////////////
// Export Model
/// /////////////////////////////
