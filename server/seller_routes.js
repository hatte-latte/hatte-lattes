module.exports = (app, pool) => {
    console.log('at seller')

 

app.get('/api/*',

 (req, res) => {
     console.log("SELLER API YAY")
  res.send({test: "test"});
});
}