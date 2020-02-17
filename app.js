var Mongodb = require('mongodb').Mongodb;
MongoClient.connect('mongodb://localhost:27017/Cotxes', function(err,db){
        if(err) throw err;
        var query = {'Marca':'Nissan'}
        var coleccion = db.collection('Cotxes');
        var cursor = coleccion.find(query);
        cursor.each(function(err, item) {
                if(item != null) console.dir(item);
                else db.close();
        });
});