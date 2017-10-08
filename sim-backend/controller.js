module.exports = {
  getContent: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_content()
      .then(content => res.status(200).send(content))
      .catch(error => console.log('error', error))
  },

  addContent: (req, res, next) => {
    console.log(req.body)
    const dbInstance = req.app.get('db');

    dbInstance.add_content(req.body)
      .then(content => res.status(200).send(content))
      .catch(error => console.log('error', error))
  },

  editContent: (req, res, next) => {
    console.log('I am running!')
    var id = req.params.id
    req.body.id = id
    console.log(req.body)
    const dbInstance = req.app.get('db');

    dbInstance.edit_content(req.body)
      .then(content => res.status(200).send(content))
      .catch(error => console.log('error', error))
  },
}
