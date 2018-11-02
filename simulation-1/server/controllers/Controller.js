module.exports = {
    getInventory(req, res) {
        let db = req.app.get('db')
        db.get_inventory().then(dbRes => {
            console.log(dbRes);
            res.status(200).send(dbRes)
        })
    },

    getInventoryById(req, res) {
        let db = req.app.get('db')
        let { id } = req.params
        db.get_inventory({ id }).then(dbRes => {
            console.log(dbRes);
            res.status(200).send(dbRes)
        })
    },

    addInventory(req, res) {
        let db = req.app.get('db')
        let { imageUrl, productName, rating } = req.body
        db.add_inventory({ imageUrl, productName, rating }).then(dbRes => {
            res.status(200).send(dbRes)
        })
    },

    editInventory(req, res) {
        let db = req.app.get('db')
        let { id } = req.params
        let { imageUrl, productName, price } = req.body
        db.get_inventory({ id }).then(dbRes => {
            console.log('dbRes', dbRes);
            let InventoryToEdit = dbRes[0]
            imagUrl = imageUrl || shelfieToEdit.imagUrl
            productName = productName || productNameToEdit.productName
            pricing = pricing || pricingToEdit.pricing

            db.update_inventory({ id, imageUrl, productName, price }).then(dbRes2 => {
                res.status(200).send(dbRes2)
            })
        });
    },

    deleteInventory(req, res) {
        let db = req.app.get('db')
        let { id } = req.params
        db.delete_inventory({ id }).then(dbRes => {
            res.status(200).send(dbRes)
        })
    }
}
