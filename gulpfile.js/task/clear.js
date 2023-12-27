const path = require("../config/path");

//* Удаление директории - Build
const clear = () => {
	return $.del(path.root);
};
module.exports = clear;