const GetSingleUser = require('../../src/service/pokemons/get_reqres')
const chai = require('chai')
const assert = chai.assert
chai.use(require('chai-json-schema'))

describe('#Testes API', () => {
    const getUser = new GetSingleUser()
    let response

    describe('#GET - Single User', () => {
        describe('Get single User', () => {

            beforeAll(async() => {
                response = await getUser.getUserNumberTwo('3')
            })

            it('#Status code 200', async() => {
                assert.equal(response.status, 200)
            })

            it('#Name is Emma', async() => {
                assert.equal(response.status, 200)
                assert.equal(response['body']['data']['first_name'], "Emma")
            })
        })
    })
})