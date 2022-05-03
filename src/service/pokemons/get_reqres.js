const env = require('../../settings/config')
const request = require('supertest')(env.url2)

class GetSingleUser {

    async getUserNumberTwo(id) {
        const res = await request.get(`api/users/${id}`)
        return res
    }
}

module.exports = GetSingleUser