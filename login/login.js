function login(id, password) {
    // pas de soumission des paramètres
    if (password === undefined || id === undefined) {
        throw new MissingParametersError('Missing parameters');
    }

    // bon mot de passe
    if (id === 'anthony' && password === 'azerty') {
        return true;
    } 
    // mauvais mot de passe
    else {
        throw new WrongCredentialsError('Wrong credentials');
    }
}



module.exports = {
    login
};