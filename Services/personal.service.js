const db = require("../db");

class PersonalService {
    async getPersonalAll() {
        const peopleAll = await db.query(`SELECT * FROM ${process.env.POSTGRES_SCHEMA}.personal;`);
        return peopleAll;
    }
    async getPersonalFioAll() {
        const fioAll = await db.query(`SELECT 
        CONCAT(p.surname, '. ', SUBSTRING(p."name", 1, 1), '. ', SUBSTRING(p.patronymic, 1, 1)) AS FIO,
        pc.personnel_number
    FROM 
        personal p
    JOIN 
        personal_career pc ON p.id_uuid = pc.personal_id_uuid;
    `);
        return fioAll;
    }
}

module.exports = new PersonalService();
