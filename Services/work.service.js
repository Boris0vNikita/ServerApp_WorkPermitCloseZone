const works = require("../func/workData");

class WorkService {
    getWorklAll() {
        return works;
    }
    getWorkOne(id) {
        if (!id) {
            throw new Error("Работа не указана");
        }
        const workOne = works.find((s) => s.id === id);
        if (!workOne) {
            throw new Error("Работа не найдена");
        }
        return workOne;
    }
}

module.exports = new WorkService();
