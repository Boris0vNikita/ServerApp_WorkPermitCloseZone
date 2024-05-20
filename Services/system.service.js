const system = require("../func/systemData");

class SystemService {
    getSystemlAll() {
        return system;
    }
    getSystemOne(id) {
        if (!id) {
            throw new Error("Система не указана");
        }
        const systemOne = system.find((s) => s.id === id);
        if (!systemOne) {
            throw new Error("Система не найдена");
        }
        return systemOne;
    }
}

module.exports = new SystemService();
