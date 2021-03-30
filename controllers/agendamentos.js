module.export = app => {
    app.get('/', (req,resp) => {
        resp.send('servidor ta bala 😎')
} );};