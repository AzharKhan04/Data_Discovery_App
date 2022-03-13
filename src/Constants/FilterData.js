const filtersData = [
    {
        type:'text',
        title:'Name',
        key:'name'
    },
    {
    type:'singleSelect',
    title:'Status',
    key:'status',
    data:[{
        id:'Verified',
        name:'Verified'
    },{
        id:'Pending',
        name:'Pending'
    },
    {
        id:'Loack',
        name:'Lock'
    },
    {
        id:'Error',
        name:'Error'
    },

]
},

{
    type:'singleSelect',
    title:'Owners',
    key:'owners',
    data:[{
        id:1,
        name:'Azhar Khan'
    },{
        id:2,
        name:'John Doe'
    },
    {
        id:3,
        name:'Nmae John'
    },
    {
        id:4,
        name:'Dale Tryn'
    },

]
}
]

export default filtersData;