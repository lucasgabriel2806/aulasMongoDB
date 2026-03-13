use('loja')

db.produtos.insertMany([
    {
        "_id": 1,
        "nome": "Notebook Dell",
        "categoria": "Eletrônicos",
        "preco": 4500,
        "estoque": 15,
        "avaliacao": 4.7
    },
    {
        "_id": 2,
        "nome": "Smartphone Samsung",
        "categoria": "Eletrônicos",
        "preco": 2500,
        "estoque": 30,
        "avaliacao": 4.5
    },
    {
        "_id": 3,
        "nome": "Cadeira Gamer",
        "categoria": "Móveis",
        "preco": 1200,
        "estoque": 10,
        "avaliacao": 4.8
    }
])

db.produtos.find({ 
    "preco": { 
        "$eq": 2500 
    } 
});

db.produtos.find({ 
    "preco": { 
        "$ne": 4500 
    } 
});

db.produtos.find({ 
    "preco": { 
        "$gt": 2000 
    } 
});

db.produtos.find({ 
    "preco": { 
        "$lt": 3000 
    } 
});

db.produtos.find({ 
    "preco": { 
        "$gte": 1000, "$lte": 3000 
    } 
});

db.produtos.find({
    "$and": [
        { "categoria": "Eletrônicos" },
        { "preco": { $gt: 3000 } }
    ]
})

db.produtos.find({ "preco": {
    "$not": { "$gt": 3000 }
  } 
})

db.produtos.find({
    "$nor": [
        { "categoria": "Eletrônicos" },
        { "preco": { "$gt": 4000 } }
    ]
})

db.produtos.find({ 
    "avaliacao": { 
        "$exists": true 
    }
})

db.produtos.find({ 
    "preco": { 
        "$type": "double" 
    } 
})