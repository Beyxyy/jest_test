function ResultAPI(){
    const Random_JSON = {
        'id': '1',
        "firstname": "Random",
        "lastname": "User",
        "email": "randomuser@gmail.com",
        "age": "20",
        'hobbys': [
            {
                'sport': 
                    ['football', 'gym']
            }, 
            {
                'music': 
                    ['rock', 'pop', 'drill']
            }, 
            {
                'food': 
                    ['pizza', 'chicken']
            }
        ],
        'friends' : 
            [
                {   
                    'id':  
                    ['2', '5', '7', '9', '10']
                }
            ]
    }

    return Random_JSON;
}


module.exports = {
    ResultAPI
};