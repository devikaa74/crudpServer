const jsonServer = require('json-server')

const crudppServer = jsonServer.create()

const router = jsonServer.router("db.json")

const middleware = jsonServer.defaults()

const PORT = 3000 || process.env.PORT

crudppServer.use(middleware)
crudppServer.use(router)

crudppServer.listen(PORT,()=>{
    console.log(`Server is started at port ${PORT} and waiting for client request`);
    
})