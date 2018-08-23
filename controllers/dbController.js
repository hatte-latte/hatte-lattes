const pg = require('pg');
const format = require('pg-format');

module.exports = function (pool) {
  return {
    getInventory: (req, res, next) => {
      const queryText = 'SELECT * from INVENTORY';
      // const values = [req.params.id];
      console.log('this what queryText look like ===>', pool.query(queryText));
      
      pool.query(queryText).then(results => {
        // console.log('this is results.rows=====>', results.rows);
        res.locals.inventory = results.rows; 
        next();
      }).catch(err => {
        if(err) throw new Error(err);
      });
    }
  }
}