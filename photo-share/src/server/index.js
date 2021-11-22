const   express  = require('express'),
        cors     = require('cors');

const   PORT = process.env.PORT || 5000,
        app = express();

app.use(cors()); //connect front-end to back-end


app.get('/api', function(req, res){
    console.log('Called');
    res.send({result: 'Hello'})
})

app.get('/quit', function(req, res){
    console.log('Called quit');
    res.send({result: 'Good Bye'})
})


app.listen(PORT, () => { console.log(`Server listening on ${PORT}`)});