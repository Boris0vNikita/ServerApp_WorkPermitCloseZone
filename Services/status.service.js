const status = require("../func/statusData");

class StatusService {
    getStatuslAll() {
        return status;
    }
    getStatusOne(name) {
        if (!name) {
            throw new Error("Имя статуса не указано");
        }
        const statusOne = status.find((s) => s.nameStatus === name);
        if (!statusOne) {
            throw new Error("Статус не найден");
        }
        return statusOne;
    }
}

module.exports = new StatusService();
