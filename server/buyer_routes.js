module.exports = (app, pool) => {
    console.log("at buyer")
    

    // shows all items
    app.get('/shop/',

        (req, res) => {
            console.log("shop")
            res.send({
                test: "test"
            });
        });

    // shows item page
    app.get('/shop/item/:id',
        (req, res) => {
            console.log("item", req.params.id)

            res.send({
                test: req.params.id
            });
        });

    
    // filters categories
    app.get('/shop/category/:id',

        (req, res) => {
            console.log("category")
            res.send({
                test: req.params.id
            });
        });




    // shows user's orders
    app.get('/shop/orders/:id',

        (req, res) => {
            console.log("orders")
            res.send({
                test: req.params.id
            });
        });


    // shows list of all orders, before paying
    app.get('/shop/confirmation/cart/',

        (req, res) => {
            console.log("shopping cart")
            res.send({
                test: "test"
            });
        });



}