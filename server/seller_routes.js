module.exports = (app, pool) => {
    console.log("at buyer")
    

    // shows all items
    app.get('/services/',

        (req, res) => {
            console.log("services")
            res.send({
                test: "test"
            });
        });

    // add item to the db
    app.post('/services/add_item',
        (req, res) => {
 
            res.send({
                test: 'add item'
            });
        });

    
    // shows all orders that belong to that seller's acct
    app.get('/services/show_orders',

        (req, res) => {
            console.log("category")
            res.send({
                test: 'test'
            });
        });




}