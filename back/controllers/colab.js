const myMail = require('../function/mail')
const Colab = require('../models/colab');
const fs = require('fs');

exports.createColab = (req, res, next) => {
  let colab = new Colab();

  colab.genre = req.body.genre;
  colab.type = req.body.type;
  colab.role = req.body.role;
  colab.location = req.body.location;
  colab.description = req.body.description;
  colab.owner = req.body.userId;


  colab.save().then(
    () => {
      res.status(201).json({
        message: 'Colab saved successfully!'
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

exports.getAllColab = (req, res, next) => {
  Colab.find().then(
    (colab) => {
      res.status(200).json({
        colab: colab
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

exports.getMyColab = (req, res, next) => {
  Colab.find(
    {owner: req.body.idUser}
  ).then(
    (colab) => {
      res.status(200).json({
        colab: colab
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

exports.deleteColab = (req, res, next) => {
  Colab.findOne({_id: req.params.id}).then(
    (Colab) => {
        Colab.deleteOne({_id: req.params.id}).then(
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
  });
};
