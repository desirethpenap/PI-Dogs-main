const dotenv = require ("dotenv");
dotenv.config();
const {API_KEY} = process.env;
const axios = require ('axios');
const {Dog, Temperaments} = require ('../db')


const getApiInfo = async () =>{
    const url = await axios.get(`https://api.thedogapi.com/v1/breeds?key=${API_KEY}`)
    const allDogs = await url.data.map(d => {  
    let temperamentArray = [];
        if (d.temperament) {//pregunto si exite la prop. temperament y lo devuelvo en un arreglo//
            temperamentArray = d.temperament.split(",");
      }


      let weightMin = parseInt(d.weight.metric.slice(0,2).trim());
      let weightMax = parseInt(d.weight.metric.slice(4).trim());
      const heightMin = parseInt(d.height.metric.slice(0, 2).trim()); 
      const heightMax = parseInt(d.height.metric.slice(4).trim());
      const life_spanMin = parseInt(d.life_span.slice(0, 2).trim());
      const life_spanMax = parseInt(d.life_span.slice(4).trim()); 

      if (weightMin && weightMax) {
        weightMin = weightMin;
        weightMax = weightMax;
    } else if (weightMin && !weightMax) {
        weightMin = weightMin;
        weightMax = `${weightMin+2}`;
    } else if (!weightMin && weightMax) {
        weightMin = `${weightMax-2}`;
        weightMax = weightMax;
    } else {
        if (d.name === "Smooth Fox Terrier") {
            weightMin = 6;
            weightMax = 9;
        } else {
            weightMin = 20;
            weightMax = 30;
        }
    }  

     
        return{
            id: d.id,
            name: d.name,
            img: d.image.url != null ? d.image.url: "data null",
            heightMin:heightMin,
            heightMax:heightMax,
            weightMin: weightMin,
            weightMax: weightMax,
            life_spanMin:life_spanMin,
            life_spanMax:life_spanMax,                     
            temperament: temperamentArray,
            createdInDb: false,
            
        };       

    });return allDogs

};

const getDbInfo = async()=> {

    return await Dog.findAll({
        include:{
            model:Temperaments,
            attributes: ['name'],
            through:{
                attributes:[],
            },
        }
    })
};

const getAllDogs = async () => {
    const infApi = await getApiInfo();
    const  infDb = await getDbInfo();
    const infoTotal = infApi.concat(infDb);
    return infoTotal;
};

const getDogies = async (req, res) => {
    const { name } = req.query;      
    let dogsTotal = await getAllDogs();
    if(name){        
        let dogName = await dogsTotal.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
        dogName.length ?            
         res.status(200).send(dogName):
         res.status(400).send('Dog Not Found')
    }else{
        return res.status(200).send(dogsTotal)
        }
 
};

 const getDogId = async (req, res, next) =>{
    try {
        const {id} = req.params
        const dogsTotales = await getAllDogs()
    
        const dog = dogsTotales.find(d => d.id == id);
    if(!dog){
        res.status(400).send("Not Available");
    }else{
        res.status(200).send(dog);
    }
    }catch(error){
        next(error);
    };

};


const getDogPost = async (req, res   ) => {
    const { name,  
            heightMax, 
            heightMin, 
            weightMax, 
            weightMin, 
            life_spanMax, 
            life_spanMin, 
            image, 
            temperament, 
        } = req.body;      
        
            if(!name || !heightMax ||!heightMin || !weightMax || !weightMin){
            return res.status(400).send('bad Request');
        }if(temperament?.length === 0){
            return res.json({error: 'Temperaments is required'});
        }try{
            const newDog  = await Dog.create({ 
            name: name.toString(),
            img: image? image:"https://illustoon.com/photo/350.png",
            heightMin: heightMin.toString(),
            heightMax: heightMax.toString(),
            weightMin: weightMin.toString(),
            weightMax: weightMax.toString(),
            life_spanMin: life_spanMin.toString(),
            life_spanMax: life_spanMax.toString(),
            createdInDb: true,           
        
        }); newDog.addTemperament(temperament);
        return res.status(201).send("The dog was created successfully");
      } catch (error){
        return res.status(404).send("Could not create new dog")
      }};    
   

const getDogDelete = async (req, res, next) => {
    const {id} =req.params;

    try{
        const dog = await Dog.findByPk(id);
        if(!dog){
            res.status(404).send("Not available");
        }else{
            await dog.destroy();
            res.status(200).send("dog removed")
        }
    }catch (error){
        next(error);
    }

};


module.exports = {
    getDogies,
    getDogId,
    getApiInfo,
    getDogPost,
    getDogDelete
}