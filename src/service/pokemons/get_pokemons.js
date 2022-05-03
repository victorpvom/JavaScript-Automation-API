require('../../settings/config')
const request = require('supertest')(env.url)

class GetPokemon {

    async getAllWitNhParam(nome) {
        const res = await request.get(`api/pokemon/${nome}`)
        return res
    }
}

module.exports = GetPokemon