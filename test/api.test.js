const api= require('../api/api.js');

test("Le résultat de l'API doit correspondre au snapshot", () => {
    const result = api.ResultAPI();
    console.log(result);
    expect(result).toMatchSnapshot();
});



