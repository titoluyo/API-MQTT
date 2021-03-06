'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DevicesSchema = Schema ({
	name: String,
	type: String,
	device: String,
	pin: Number,
	status: Number,
	topic: String, 
	timeon: String,
	timeoff: String,
	days: String
})

module.exports = mongoose.model('Devices', DevicesSchema)