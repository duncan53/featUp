const myMail = require('../function/mail')
const Music = require('../models/music');
const fs = require('fs');

exports.createMusic = (req, res, next) => {
  let music = new Music();

  const url = req.protocol + '://' + req.get('host');

  music.musicSrc = url + '/files/' + req.files.musicSrc[0].filename;
  music.cover = url + '/files/' + req.files.cover[0].filename;
  music.userOwner = req.userId;
  music.feat = req.body.feat;
  music.name = req.body.name;
  music.style = req.body.style;

  //myMail.sendMail(req.body.email, "Nouveau fichier", "Vous avez un nouveau fichier disponible sur la plateforme moncabinetradio.net");


  music.save().then(
    () => {
      res.status(201).json({
        message: 'Music saved successfully!'
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

exports.getAllMusic = (req, res, next) => {
  Music.find().populate({
    path : 'userOwner',
    select: '-password -email',
  }).then(
    (music) => {
      res.status(200).json({
        music: music
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

exports.getMyMusic = (req, res, next) => {
  Music.find(
    {userOwner: req.userId}
  ).populate({
    path : 'userOwner',
    select: '-password -email',
  }).then(
    (music) => {
      res.status(200).json({
        music: music
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

exports.deleteMusic = (req, res, next) => {
  Music.findOne({_id: req.params.id}).then(
    (Music) => {
        Music.deleteOne({_id: req.params.id}).then(
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
