const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const Article = require('./db').Article;
const read = require('node-readability');
const url = 'http://www.manning.com/cantelon3';
const port = process.env.PORT || 3000;

const articles = [{name: 'java', title: '面向对象'}, {name: 'sql', title: '删库到跑路'}, {name: 'php', title: '世界上最好的语言'}]

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

read(url, (err, result) => {
    Article.create({title: result.title, content: result.content}, (err, articles) => {
        if (err) {
            return next(err);
        }
        ret.send('ok');
    });
})

app.get('/', (req, ret) => {
    ret.send("hello world");
});

app.get('/articles', (req, ret, next) => {
    Article.selectAll((err, articles) => {
        if (err) {
            return next(err);
        }
        ret.send(articles);
    });
});

app.get('/articles/:id', (req, ret, next) => {
    const id = req.params.id;
    Article.select(id, (err, articles) => {
        if (err) {
            return next(err);
        }
        ret.send(articles);

    });
});

app.post('/articles', (req, ret, next) => {
    ret.send('ok');
});


app.delete('/articles/:id', (req, ret, next) => {
    const id = req.params.id;
    Article.delete(id, (err, articles) => {
        if (err) {
            return next(err);
        }
        ret.send({message: 'deleted'});
    });
});

app.listen(port, () => {
    console.log(`app start on localhost : ${port}`);
})

module.exports = app;