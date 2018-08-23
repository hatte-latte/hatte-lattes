const pg = require('pg');
const format = require('pg-format');

// hardcoding seller_id, but it should it be taken from authentication dynamically
const seller_id = 1;

module.exports = function (pool) {
  return {
    getInventory: (req, res, next) => {
      console.log('x')
      const queryText = 'SELECT * from INVENTORY WHERE seller_id=$1'; 
      const values = [1];
      // const values = [req.params.id];
      console.log('this what queryText look like ===>', pool.query(queryText));
      
      pool.query(queryText, values).then(results => {
        res.locals.sellerInventory = results.rows; 
        console.log(res.locals.sellerInventory, "seller inventory~~")
        next();
      }).catch(err => {
        if(err) throw new Error(err);
      });
    },


    addInventory: (req, res, next) => {
      console.log('x')
      console.log(req.body)
      const queryText = 'INSERT INTO inventory  (id, quantity_onhand, seller_id, photo, description, title, category, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
      // const values = [4, 5, 1, 'https://secure.img1-fg.wfcdn.com/im/74058904/resize-h400-w400%5Ecompr-r85/2757/27572079/Galaxy+Glow+in+The+Dark+Stars+Combo+Junction+Play+Tunnel.jpg', 'TENT', 'Test description', 'TOYS', 30];
      const values = [
        req.body.id, // SHOULD BE DONE BY DB
        req.body.quantity_onhand,
        req.body.seller_id, //SHOULD BE FROM AUTH
        req.body.photo, // SHOULD BE FROM FIREBASE
        req.body.description,
        req.body.title,
        req.body.category,
        req.body.price
      ];                                                                                                                                                         
      console.log('this what queryText look like ===>', pool.query(queryText));
      
      pool.query(queryText, values).then(results => {
        res.locals.newItem = results.rows; 
        console.log(res.locals.newItem, "new inventory~~")
        next();
      }).catch(err => {
        if(err) throw new Error(err);
      });
    }



  }
}