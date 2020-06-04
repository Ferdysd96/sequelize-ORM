# Node.js
Application Programming Interface with node.js 

First you must config your database credentials in file .env, so if file is .env copy, you should change the name to .env.

-npm install .

-npm run serve.

If you are going to use MSSQ you should add trustServerCertificate:false, like in the funciton below. This function is located in file.

node_modules\sequelize\lib\dialects\mssql\connection-manager.js


 connect(config) {
    const connectionConfig = {
      server: config.host,
      authentication: {
        type: 'default',
        options: {
          userName: config.username || undefined,
          password: config.password || undefined     
        }
      },
      options: {
      
        port: parseInt(config.port, 10),
        database: config.database,
        encrypt: false,
        trustServerCertificate:false,
        
      }
    };
