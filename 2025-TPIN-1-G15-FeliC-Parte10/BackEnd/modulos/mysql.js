//Sección MySQL del código
const mySql = require("mysql2/promise");

const SQL_CONFIGURATION_DATA =
{
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD, 
	database: process.env.MYSQL_DB,	
	port: 3306,
	charset: 'UTF8_GENERAL_CI',
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
};


const pool = mySql.createPool(SQL_CONFIGURATION_DATA);	

/**
 * Realiza una query a la base de datos MySQL indicada en el archivo "mysql.js".
 * @param {String} queryString Query que se desea realizar. Textual como se utilizaría en el MySQL Workbench.
 * @returns Respuesta de la base de datos. Suele ser un vector de objetos.
 */
exports.realizarQuery = async function (queryString, params = []) {
	try{
		const [rows] = await pool.execute(queryString, params);
		return rows;
	} catch (err) {
		console.error('Error en realizarQuery:', err);
		throw err;
	}
};