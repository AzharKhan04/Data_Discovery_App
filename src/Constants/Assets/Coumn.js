import moment from "moment";
const Columns = [];

const getCols = () => {

    if(Columns.length) {
        return Columns
    }

    for(let i=1;i<=2000;i++) {
        Columns.push({
            id:i,
            name:'username',
            alias:'User Name',
            description:'This is the table containing the records related to the customer users who registered over the app',
            created:moment().valueOf(),
            updated:moment().valueOf(),
            status:'Verified',
            isActive:true,
            source:'DB Server',
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

    return Columns


}

let cols  = getCols();

export default cols;