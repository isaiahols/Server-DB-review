module.exports = {
    getSomething: (req, res) => {
        console.log('I have something but not yet')
        const db = req.app.get('db');
        db.get_stuff().then(response => {
            res.status(200).send(response)
        })
    },
    createSomething: (req, res) => {
        const { name, quantity, favorite_color } = req.body
        db = req.app.get('db').create_stuff(name, quantity, favorite_color)
            .then(response => {
                res.status(200).send(response)
            })
    },
    updateSomething: (req, res) => {
        const db = req.app.get('db');
        const {
            params: { id },
            body: {
                name,
                quantity,
                favorite_color
            },
        } = req;

        db.update_stuff(name, quantity, favorite_color, id)
            .then(response => {
                res.status(200).send(response);
            })

    }
}