const myMail = require('../function/mail')
const Playlist = require('../models/playlist');
const fs = require('fs');

exports.createPlaylist = (req, res, next) => {
  let music = new Playlist();

  music.label = req.body.label;
  music.owner = req.userId;

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
  Playlist.find({
    owner: req.userId
  })
  .populate({
    path : 'owner',
    select: '-password -email',
  })
  .populate({
    path : 'music',
    populate : {
      path : 'userOwner',
      select: '-password -email'
    }
  })
  .then(
    (playlist) => {
      res.status(200).json({
        playlist: playlist
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
    (playlist) => {
      res.status(200).json({
        playlist: playlist
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


exports.addMusic = (req, res, next) => {
  Playlist.findOne({_id: req.params.id}).then(
    (playlist) => {

      let tabCollab = playlist.music;
      let tempCollab = req.body.idMusic

      tabCollab.push(tempCollab);

        Playlist.findOneAndUpdate({_id: req.params.id},{music: tabCollab}).then(
          () => {
            res.status(201).json({
              message: 'Musique add !'
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
