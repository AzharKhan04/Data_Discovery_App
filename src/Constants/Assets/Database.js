import moment from "moment";
let Databases = [];

const getDatabases = () => {

    if(Databases.length) {
        return Databases
    }

    Databases =[{
           type:'database',
            id:1,
            name:'MySQL',
            alias:'SQL Database',
            description:'This is the core database',
            created:moment().valueOf(),
            updated:moment().valueOf(),
            status:'Verified',
            isActive:true,
            source:'AWS',
            owners:[{
                id:1,
                userName:'John Doe'
            }],
            experts:[{
                id:1,
                name:'Azhar Khan'
            }],
            topUsers:[{
                id:1,
                name:'John Doe'
    
            }],
            topApplications:[{
                id:1,
                name:'Looker'
            }],
    
            tags: [{
                id:1,
                name:'SQL',
    
            },
            {
                id:2,
                name:'db',
                
            }]
        },
        {
            id:2,
            type:'database',

            name:'MongoDB',
            alias:'No SQL Database',
            description:'This is the mongo database',
            created:moment().valueOf(),
            updated:moment().valueOf(),
            status:'Lock',
            isActive:true,
            source:'AWS',
            owners:[{
                id:1,
                userName:'John Doe'
            }],
            experts:[{
                id:1,
                name:'Azhar Khan'
            }],
            topUsers:[{
                id:1,
                name:'John Doe'
    
            }],
            topApplications:[{
                id:1,
                name:'Looker'
            }],
    
            tags: [{
                id:1,
                name:'SQL',
    
            },
            {
                id:2,
                name:'db',
                
            }]
        }]

        return Databases
    
        
    


}

let databases  = getDatabases();

export default databases;