'use strict'

var mocha = require('mocha')
var chai = require('chai')

const GoogleService = require('../service/googleService')
const Validate = require('../validation/Validate')

describe('Call google url'.gray, async function () {
    const validate = new Validate(this)

    before('setup', async function () {
        console.log('setup test'.magenta.bold)

    })

    it('call google api', async function () {
        console.log('start'.red)
        const googleService = new GoogleService(this)
        try {
            var response = await googleService.getGoogle()
            console.log('start'.red)
        }
        catch (err) {

        }
        await validate.validateStatus200(response)
    })
})