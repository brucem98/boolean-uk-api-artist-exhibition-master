const prisma = require("../../utils/database")


// - create an exhibition with an address (POST /exhibitions)

function createOneAddressAndExhibition(req,res){
    const bodyAddress = req.body
    const bodyExhibition = req.body.exhibition
    delete bodyAddress.exhibition

    console.log("bodyExhibition", bodyExhibition)
    prisma.address.create({
        data: {
            ...bodyAddress,
            exhibitions: {                        
            create: [
                {
                    ...bodyExhibition,
                    date: new Date(bodyExhibition.date)   
                },
                
             ],
            },
        },
        include : {
            exhibitions: true,
        },
        })
        .then((result)=>{
            console.log(result)
            res.json({data: result})
        })
        .catch(error=>{
            console.error(error)
            res.status(500).json(error)
        })
}

module.exports = {createOneAddressAndExhibition}
