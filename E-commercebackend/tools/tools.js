const bcrypt = require('bcrypt');

const HashinhString = async (str) => {
    return await bcrypt.hash(str, 10);
}

exports.Tools = {
    HashinhString: HashinhString
}