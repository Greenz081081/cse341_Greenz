/* eslint-disable no-constant-condition */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
module.exports = function (app) {
  app.get('/users/:id', (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint get a user.'
    // #swagger.parameters['id'] = { description: 'ID Telephone subscriber..' }

    /* #swagger.parameters['filter'] = {
	       in: 'query',
               description: 'Disposable filter.',
               type: 'string'
        } */
    const filter = req.query.filter

    if (false) { return res.status(404).send(false) }

    /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/User" },
               description: 'User found.'
        } */
    return res.status(404).send(false)
  })

  app.get('/users/', (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint get a user.'
    // #swagger.parameters['id'] = { description: 'ID Telephone subscriber..' }

    /* #swagger.parameters['filter'] = {
	       in: 'query',
               description: 'Disposable filter.',
               type: 'string'
        } */
    const filter = req.query.filter

    if (false) { return res.status(404).send(false) }

    /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/User" },
               description: 'User found.'
        } */
    return res.status(404).send(false)
  })

  app.post('/users', (req, res) => {
    /* #swagger.tags = ['User']
       #swagger.description = 'Endpoint to add user.' */

    /* #swagger.parameters['newUser'] = {
           in: 'body',
           description: 'User Information.',
           required: true,
           schema: { $ref: "#/definitions/addUser" }
    } */

    const newUser = req.body.newUser

    if (true) {
      // #swagger.responses[201] = { description: 'User successfully registered!' }
      return res.status(201).send(true)
    }
    return res.status(500) // #swagger.responses[500]
  })

  app.put('/users', (req, res) => {
    /* #swagger.tags = ['User']
       #swagger.description = 'Endpoint to put user.' */

    /* #swagger.parameters['putUser'] = {
           in: 'body',
           description: 'User Information.',
           required: true,
           schema: { $ref: "#/definitions/putUser" }
    } */

    const putUser = req.body.putUser

    if (true) {
      // #swagger.responses[201] = { description: 'User successfully registered!' }
      return res.status(201).send(true)
    }
    return res.status(500) // #swagger.responses[500]
  })

  app.delete('/users', (req, res) => {
    /* #swagger.tags = ['User']
       #swagger.description = 'Endpoint to put user.' */

    /* #swagger.parameters['deleteUser'] = {
           in: 'body',
           description: 'User Information.',
           required: true,
           schema: { $ref: "#/definitions/deleteUser" }
    } */

    const deleteUser = req.body.deleteUser

    if (true) {
      // #swagger.responses[201] = { description: 'User successfully deleted!' }
      return res.status(201).send(true)
    }
    return res.status(500) // #swagger.responses[500]
  })
}
