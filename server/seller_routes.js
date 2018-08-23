const sellerDBController = require('../controllers/sellerDBController');

module.exports = (app, pool) => {
    console.log("at buyer")
    

    // shows all items
    app.get('/services/', sellerDBController(pool).getInventory, (req, res) => {
        res.send(res.locals.sellerInventory);
    });


    // add item to the db

    app.post('/services/add_item', sellerDBController(pool).addInventory, (req, res) => {
        res.send(res.locals.newItem);
    });




    
        // should be a stretch feature
    // shows all orders that belong to that seller's acct
    app.get('/services/show_orders',

        (req, res) => {
            console.log("category")
            res.send({
                test: 'test'
            });
        });




}