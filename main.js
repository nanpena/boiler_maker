const {db} = require('./server/database/models')

const app = require('./server')
const port = process.env.PORT || 3000

    db.sync().then(()=>{
        console.log('db synced!')
        app.listen(port, ()=>{ console.log(`you're listening at port ${port}`)})
    })