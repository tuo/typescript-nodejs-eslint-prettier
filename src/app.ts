import express from 'express';
import hello from './hello';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("The sedulous 2233heyn!" + new Date());
}); 
console.log(hello());

class person {
    constructor() {
        
    }

    /**
     * print
     */
    public print() {
        console.log('this is a person')
    }
}

let p = new person();
p.print();

app.listen(port, err => {
    if(err){
        return console.error(err);
    }
    return console.log(`server is1 listening on ${port}`);
})