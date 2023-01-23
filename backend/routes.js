const express = require("express");
const router = express.Router();
const {
  getContacts,
  setContact,
  putContact,
  deleteContact,
} = require("./controllers");
/**
*Mark: I think you should start practicing route naming.
*e.g:
*get should be something like "/get/contacts"
*post should be something like "/create/contact"
*put should be something like "/update/contact"
*delete should be something like "/delete/contact"
*/
router.get("/", getContacts);
router.post("/", setContact);

router.put("/:id", putContact);
router.delete("/:id", deleteContact);

module.exports = router;
