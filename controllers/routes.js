module.exports = app => {
    app.get('/agendamentos', (req, resp) => {
        resp.send('Servidor ta monstro 😎');
    });
};
