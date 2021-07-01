const myMail = require('../function/mail')
const Type = require('../models/type');
const fs = require('fs');

exports.createType = (req, res, next) => {
  let type = new Type();

  type.label = req.body.label;

  //myMail.sendMail(req.body.email, "Nouveau fichier", "Vous avez un nouveau fichier disponible sur la plateforme moncabinetradio.net");

  type.save().then(
    () => {
      res.status(201).json({
        message: 'Type saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllType = (req, res, next) => {
  Type.find().then(
    (type) => {
      res.status(200).json({
        type: type
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};


exports.deleteType = (req, res, next) => {
  Type.findOneAndDelete({
    _id: req.params.id
  }).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
