const personalService = require("../Services/personal.service");

class PersonalController {
    async getAll(req, res, next) {
        try {
            const peopleAll = await personalService.getPersonalAll();
            res.json(peopleAll.rows);
        } catch (e) {
            next(e);
        }
    }
    async getFioAll(req, res, next) {
        try {
            const fioAll = await personalService.getPersonalFioAll();
            res.json(fioAll.rows);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new PersonalController();
