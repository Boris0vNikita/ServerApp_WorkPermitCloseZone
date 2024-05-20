const siz = require("../func/SIZData");

class SIZService {
    getSIZlAll() {
        return siz;
    }
    getSIZOne(label) {
        if (!label) {
            throw new Error("СИЗ не указана");
        }
        const sizOne = siz.find((s) => s.label === label);
        if (!sizOne) {
            throw new Error("СИЗ не найдена");
        }
        return sizOne;
    }
}

module.exports = new SIZService();
