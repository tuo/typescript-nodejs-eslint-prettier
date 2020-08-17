import express from 'express';
import bodyparser from 'body-parser'
import router from './routes'

const app = express();
const port = 3000;

app.use(bodyparser.json())
app.use(router)

app.get('/', (req, res) => {
    res.send("The sedulous 2233heyn!" + new Date());
});



app.listen(port, err => {
    if(err){
        return console.error(err);
    }
    return console.log(`server is1 listening on ${port}`);
})