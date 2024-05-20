const technical = require("../func/TechnicalEventData");

class TechnicalService {
    getTechnicallAll() {
        return technical;
    }
    getTechnicalOne(label) {
        if (!label) {
            throw new Error("Тех. мероприятие не указано");
        }
        const technicalOne = technical.find((s) => s.label === label);
        if (!technicalOne) {
            throw new Error("Тех. мероприятие не найдено");
        }
        return technicalOne;
    }
}

module.exports = new TechnicalService();
