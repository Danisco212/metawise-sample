const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eegSchema = new Schema({
    neurocitydelta: {
        type: [[Number]],
        required: true,
    },
    neurocityalpha: {
        type: [[Number]],
        required: true,
    },
    neurocitybeta: {
        type: [[Number]],
        required: true,
    },
    neurocitygamma: {
        type: [[Number]],
        required: true,
    },
    signalquality: {
        type: [[Number]],
        required: true,
    },
    time: {
        type: [Date],
        required: true,
    },
    
}, { timestamps: true })

const EEGData = mongoose.Model('eegdata', eegSchema)
module.exports = EEGData;