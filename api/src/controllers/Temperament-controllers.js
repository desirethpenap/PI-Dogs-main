const {Temperaments} = require ('../db')
const {getApiInfo} = require ('./Dogs-controllers')



const getTemperament = async(req, res) => {

    const info = await getApiInfo();
    const infoTemperaments = info
    .map(d => d.temperament)
    .toString()
    .split(",")
    .map((d)=> d.trim())
    .filter(d=> d.length > 1)
    const filtro = infoTemperaments.filter((d) => d) 
    let tempFilt = [...new Set(filtro)];   

          tempFilt.forEach ((d) => {
            Temperaments.findOrCreate({
                    where:{name:d}
                });
            }); const allTemp = await Temperaments.findAll();


    res.send(allTemp);

    };        




module.exports = {
    getTemperament,  
}