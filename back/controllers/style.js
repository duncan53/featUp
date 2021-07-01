const myMail = require('../function/mail')
const Style = require('../models/style');
const fs = require('fs');

exports.createStyle = (req, res, next) => {
  let style = new Style();

  style.label = req.body.label;

  //myMail.sendMail(req.body.email, "Nouveau fichier", "Vous avez un nouveau fichier disponible sur la plateforme moncabinetradio.net");

  style.save().then(
    () => {
      res.status(201).json({
        message: 'Style saved successfully!'
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

exports.getAllStyle = (req, res, next) => {
  Style.find().then(
    (style) => {
      res.status(200).json({
        style: style
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


exports.deleteStyle = (req, res, next) => {
  Style.findOneAndDelete({
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
