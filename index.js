import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use('/images', express.static('images'));

app.get('/', (req, res)=>{
    res.json(data);
});

app.get('/item/:id', (req, res)=>{
    let user = Number(req.params.id);
    console.log(data[user]);
    res.send(data[user]);
}, (req,res)=>{
    console.log('Did you get the right data?');
});

app.post('/newItem', (req, res)=>{
    res.send(`a post request with /newItem route on port ${PORT}`);
});

app.post('/item', (req, res)=>{
    res.send(`a put request with /item route on port ${PORT}`);
});

app.delete('/item', (req, res)=>{
    res.send(`a delete request with /item route on port ${PORT}`);
});

app.listen(PORT, ()=>{
    console.log(`Server running in port ${PORT}`);
    // console.log(data);
});