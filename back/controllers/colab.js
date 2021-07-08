const myMail = require('../function/mail')
const Colab = require('../models/colab');
const fs = require('fs');

exports.createColab = (req, res, next) => {
  let colab = new Colab();

  colab.titre = req.body.titre;
  colab.genre = req.body.genre;
  colab.type = req.body.type;
  colab.role = req.body.role;
  colab.location = req.body.location;
  colab.description = req.body.description;
  colab.owner = req.userId;


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

exports.getAllColabNotMe = (req, res, next) => {
  Colab.find().populate({
    path : 'owner',
    select: '-password',
  }).populate({
    path : 'response.user',
    select: '-password',
  }).then(
    (colab) => {
      res.status(200).json({
        colab: colab.filter(colab => colab.owner._id != req.userId)
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
    {owner: req.userId}
  ).populate({
    path : 'response.user',
    select: '-password',
  }).then(
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

exports.addResponse = (req, res, next) => {
  Colab.findOne({_id: req.params.id}).then(
    (colab) => {
      let tabResponse = colab.response;
      let tempResponse =
      {
        user: req.userId,
        message: req.body.message
      };

      tabResponse.push(tempResponse);

        Colab.findOneAndUpdate({_id: req.params.id},{response: tabResponse}).then(
          () => {
            res.status(201).json({
              message: 'Response add !'
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
