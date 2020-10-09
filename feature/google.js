'use strict'

const chai = require('chai'),

var googleService = require('../service/googleService')

var GoogleService = new googleService()

describe('Call google url'.gray, async function () {
    before('setup', async function () {
        console.log('setup test'.magenta.bold)
        service = new GoogleService(this)
    })

    it('call google api', async function () {
        console.log('start'.red)

        try {
            response = await googleService.getGoogle()
        }
        catch (err) {

        }
    })
})