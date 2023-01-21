var express = require('express');
var router = express.Router();
const { clientControllers } = require('../controllers');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const query = req.query;
  //console.log(query);
  try {
    const result = await clientControllers.getAllClient(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async function (req, res, next) {
  const body = req.body;
  //console.log(body);
  try {
    const result = await clientControllers.addClient(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.put('/', async function (req, res, next) {
  const body = req.body;
  if (!body._id) {
    return res.status(400).send({ message: 'Id is required' });
  }
  //console.log(body);
  try {
    const result = await clientControllers.updateClient(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.delete('/:id', async function (req, res, next) {
  //url paramerts
  const id = req.params.id;
  //console.log(body);
  try {
    const filter = { _id: id };
    const result = await clientControllers.deleteClient(filter);
    //console.log(result);
    res.status(200).send('Deleted');
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
