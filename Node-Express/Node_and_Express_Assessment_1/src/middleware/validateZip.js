const express = require("express");

function validateZip(req, res, next) {
  const zip = req.params.zip;

  if (zip.length === 5 && !isNaN(zip)) 
    next();
  else 
    res.send(`Zip (${zip}) is invalid!`);

}

module.exports = validateZip;
