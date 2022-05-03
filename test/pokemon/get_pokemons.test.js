const GetPokemon = require('../../src/service/pokemons/get_pokemons')
const chai = require('chai')
const assert = chai.assert
chai.use(require('chai-json-schema'))

describe('#Testes API', () => {
    const getPokemon = new GetPokemon()
    let response

    describe('#GET - Pokemons', () => {
        describe('Get pokemon by name', () => {

            beforeAll(async() => {
                response = await getPokemon.getAllWithParam('Charmander')
            })

            it('#Status code 200', async() => {
                assert.equal(response.status, 200)
            })

            it('#Name is Charmander', async() => {
                assert.equal(response.status, 200)
                assert.equal(response['body']['data']['name'], "Charmander")
            })
        })
    })
})