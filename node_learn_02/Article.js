const sqlite3 = require('sqlite3').verbose();
const dbName = 'mitix';
const db = new sqlite3.Database(dbName);

db.serialize(() => {
    const sql = `create table if not exists articles (id integer primary key,title ,content text)`;
    db.run(sql);
});

class Article {
    static selectAll(cb) {
        db.all('select * from articles', cb);
    }

    static select(id, cb) {
        db.get('select * from articles where id = ?', id, cb);
    }

    static create(data, cb) {
        const sql = 'insert into articles(title,content) values(?,?)';
        db.run(sql, data.title, data.content, cb);
    }

    static delete(id, cb) {
        if (!id) {
            return cb(new Error('please provide an id'));
        }
        db.run('delete from articles where id = ?', id, cb);
    }
}


module.exports = db;
module.exports.Article = Article;