const myMail = require('../function/mail')
const Playlist = require('../models/playlist');
const fs = require('fs');

exports.createPlaylist = (req, res, next) => {
  let music = new Playlist();


  const url = req.protocol + '://' + req.get('host');


  music.label = req.body.label;
  music.owner = req.body.idUser;
  music.music = req.body.music;
  music.isPrivate = req.body.isPrivate;

  //myMail.sendMail(req.body.email, "Nouveau fichier", "Vous avez un nouveau fichier disponible sur la plateforme moncabinetradio.net");

  music.save().then(
    () => {
      res.status(201).json({
        message: 'Playlist saved successfully!'
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

exports.getAllPlaylist = (req, res, next) => {
  Playlist.find().then(
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

exports.getMyPlaylist = (req, res, next) => {
  Playlist.find(
    {owner: req.body.idUser}
  ).then(
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

exports.deletePlaylist = (req, res, next) => {
  Playlist.findOne({_id: req.params.id}).then(
    (Playlist) => {
        Playlist.deleteOne({_id: req.params.id}).then(
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
