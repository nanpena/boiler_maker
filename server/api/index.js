const router = require('express').Router()

// for example // 
// for everting route /users , go to users file 
// router.use('/users',require('./users'))
// router.use('/puppies', require('./puppies'))
// router.use('/kittens', require('./kittens'))

router.get('/', (req,res,next)=>{
    res.send('welcome to my API ROUTES')
})


router.use(function(req,res,next){
    const err = new Error(' Sorry, Page Not Found :(')
    err.status = 404
    next(err)
})

module.exports = router; 