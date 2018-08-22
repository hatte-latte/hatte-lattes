const pg = require('pg');
const format = require('pg-format');

module.exports = function (pool) {
  return {
    getInventory: (req, res, next) => {
      const queryText = 'SELECT * from INVENTORY';
      const values = [req.params.id];

      pool.query(queryText, values).then(results => {
        res.locals.storeInventory = { inventory: results.rows[0]};
        next();
      }).catch(err => {
        if(err) throw new Error(err);
      });
    }
  }
}