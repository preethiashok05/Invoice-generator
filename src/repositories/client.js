const clients = require("../dataset/clients");

const clientNotFoundError = ()=>{
    const err = new Error('Client Is Not Found');
    err.statusCode = 404;
    return err;
}


/**
 * @param {String} id 
 */
const getClientById = (id) => {
    console.log(id);
    const clientFound = clients.find((client)=> client.clientId === id);
    if (!clientFound){
        throw clientNotFoundError()
    }
    return clientFound;
}

module.exports = { getClientById }
