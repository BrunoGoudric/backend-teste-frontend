const User = require('../models/User');
const database = require('../config/db');
const { Op } = require('sequelize');

module.exports = {
    async get(req, res){
        try {
            await database.sync();

            

            const resultSearch = await User.findAll()


            res.json(resultSearch)
        } catch (error) {
            res.status(500).json({message: 'Service Unavailable'});
            console.log("Error=", error)
        }
    },
    async post(req, res){
        try {
            await database.sync();

            const { 
                fullname,
                cpf,
                rg,
                dt_birthday,
                email,
                fone,
                address,
                sector,
                position,
                company,
                userStatus
             } = req.body;
            
            const resultSearch = await User.findAll({
                where: {
                    cpf: {
                        [Op.eq]: cpf
                    }
                }
            });

            if(resultSearch.length > 0){
                return res.send('User already exists!')
            }

            await User.create({
                fullname: fullname,
                cpf: cpf,
                rg: rg,
                dt_birthday: dt_birthday,
                email: email ,
                fone: fone || "",
                address: address,
                sector: sector,
                position: position,
                company: company,
                status: userStatus
            })

            return res.status(200).send('User create success!')

        } catch (error) {
            console.log("Error=", error)
            return res.status(503).send('Service Unavailable');
            
        }   
    },
    async getByCompany(req, res){
        try {
            await database.sync();

            const { 
               company
             } = req.query;

            const resultSearch = await User.findAll({
                where: {
                    [Op.and]: [
                        {status: "Ativo"},
                        {company: company}
                    ]
                }
            })


            res.json(resultSearch)
        } catch (error) {
            res.status(500).json({message: 'Service Unavailable'});
            console.log("Error=", error)
        }
    },
    async postByUser(req, res){
        try {
            await database.sync();

            const { 
               id,
               status
             } = req.body;

            const resultSearch = await User.update({status: status}, {
                where: {
                    id: id                    
                }
            })


            res.json(resultSearch)
        } catch (error) {
            res.status(500).json({message: 'Service Unavailable'});
            console.log("Error=", error)
        }
    }
}