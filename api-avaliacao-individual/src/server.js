const application = require('./app/App'); 
PORT = process.env.PORT;
application.listen(PORT, () => {
  console.log(`Servidor rodand ${PORT} `);
});


