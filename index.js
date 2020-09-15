var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'test'
});
 
connection.connect();
 
connection.query('select * from user', function (error, results, fields) {
  if (error) throw error;
  console.log('The result is: ', results);
  connection.end()
});