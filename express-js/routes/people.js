const express = require('express');
const router = express.Router();
const {
    getPeople,
    getPeopleId,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controller/people')


// router.get("/", getPeople);
// router.get("/:id", getPeopleId);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman)
// router.put('/:id', updatePerson);
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').get(getPeopleId).put(updatePerson).delete(deletePerson);

module.exports = router;
 