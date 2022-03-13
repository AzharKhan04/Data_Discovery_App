import moment from "moment";

const getRandomStatus = () => {
    let statuses = ["Pending","Verified","Error","Lock"]
    let randomIndex = Math.floor((Math.random()*3));
    return  statuses[randomIndex] || statuses[1];
}
const Tables = [];

const getTables = () => {

    if(Tables.length) {
        return Tables
    }

    for(let i=1;i<=200;i++) {
        Tables.push({
            id:i,
            name:`User${i}`,
            alias:'User Table',
            description:'This is the table containing the records related to the customer users who registered over the app',
            totalRows:1000,
            totalColumn:18,
            created:moment().valueOf(),
            updated:moment().valueOf(),
            status:getRandomStatus(),
            isActive:true,
            source:'Delta Lake',
            owners:[{
                id:1,
                userName:'Azhar Khan'
            }],
            experts:[{
                id:1,
                name:'Sameer Khan'
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
                name:'Customer',
    
            },
            {
                id:1,
                name:'User',
                
            }]
    
        })
    }

    return Tables


}

let tables  = getTables();

export default tables;