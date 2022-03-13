import Assets from "./Feature/Assets";
import Dashboard from "./Dashboard";


const privateRoutes = []

const publicRoutes = [
    {
        path:'/assets/:id',
        component:<Assets/>

    },
    {
        path:'/',
        component:<Dashboard/>

    }
]

const routes = {
    privateRoutes:privateRoutes,
    publicRoutes:publicRoutes
}

export default routes;