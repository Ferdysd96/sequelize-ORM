# Node.js
Application Programming Interface with node.js 


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
