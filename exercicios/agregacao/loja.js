db.cliente.insertOne(
    {
        _id: 1,
        nome: "João da Silva",
        idade: 30,
        email: "joao@gmail.com"
    }
);

db.produto.insertOne(
    {
        _id: 1,
        nome: "Produto Exemplo",
        preco: 99.99,
        categoria: "Eletrônicos"
    }
);

db.pedido.insertOne(
    {
        cliente_id: 1,
        data: new Date(),
        itens: [
            {
                produto_id: 1,
                preco: 99.99,
                quantidade: 1,
                total_unitario: 99.99
            }
        ]
    }
)

db.pedido.aggregate([
    {
        $lookup: {
            from: "cliente",
            localField: "cliente_id",
            foreignField: "_id",
            as: "cliente_info"
        }
    }
]);

db.cliente.insertMany([
    {
        _id: 2,
        nome: "Maria Oliveira",
        idade: 28,
        email: "maria@gmail.com"
    },
    {
        _id: 3,
        nome: "Carlos Pereira",
        idade: 35,
        email: "carlos@gmail.com"
    }
]);

db.produto.insertMany([
    {
        _id: 2,
        nome: "Tablet",
        preco: 250.00,
        categoria: "Eletrônicos"
    },
    {
        _id: 3,
        nome: "Foninho",
        preco: 150.00,
        categoria: "Eletrônicos"
    },
    {
        _id: 4,
        nome: "Cadeira Ergonomica",
        preco: 3000.00,
        categoria: "Roupas"
    }
]);

db.pedido.insertOne(
    {
        cliente_id: 1,
        data: new Date(),
        itens: [
            {
                produto_id: 2, 
                preco: 250,
                quantidade: 2,
                total_unitario: 500
            },
            {
                produto_id: 3,
                preco: 150,
                quantidade: 1,
                total_unitario: 150
            }
        ]
    }
)

db.pedido.aggregate([
    {
        $project: {
            cliente_id: 1,
            data: 1,
            itens: 1, // Remover essa linha caso não queira mostrar os itens
            valor_total_compra: {
                $sum: {
                    $map: {
                        input: "$itens",
                        as: "item",
                        in: "$$item.total.unitario"
                    }
                }
            }

        }
    }
])