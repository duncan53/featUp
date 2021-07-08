const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = (req, res, next) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {



      let user = new User();

      const { email, pseudo, style, type, dateNaissance } = req.body;

      user.email = email;
      user.pseudo = pseudo;
      user.style = style;
      user.type = type;
      user.password = hash;
      user.dateNaissance = dateNaissance;

      user.save().then(
        () => {
          res.status(201).json({
            message: 'User added successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    }
  );
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }).then(
    (user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error('User not found!')
        });
      }
      bcrypt.compare(req.body.password, user.password).then(
        (valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error('Incorrect password!')
            });
          }
          const token = jwt.sign(
            { userId: user._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' });
          res.status(200).json({
            token: token
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    }
  ).catch(
    (error) => {
      res.status(500).json({
        error: error
      });
    }
  );
};

exports.getAllUser = (req, res, next) => {
  User.find().then(
    (user) => {
      res.status(200).json({
        user: user
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

exports.getMyInfo = (req, res, next) => {
  User.findOne({
    _id: req.userId
  })
  .select('-password')
  .populate("type")
  .then(
    (user) => {
      res.status(200).json({
        user: user
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

exports.deleteUser = (req, res, next) => {
  User.findOne({value: req.params.id}).then(
    (User) => {
        User.deleteOne({value: req.params.id}).then(
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

exports.modifyUser = (req, res, next) => {
  const { email, pseudo, style } = req.body;

  user = {
    email: email,
    pseudo: pseudo,
    style: style
  };

  User.updateOne({value: req.params.id}, user).then(
    () => {
      res.status(201).json({
        message: 'User modified successfully!'
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

exports.subToFeatUpPlus = (req, res, next) => {
  User.findOneAndUpdate({_id: req.userId}, {featUpPlus: true}).then(
    () => {
      res.status(201).json({
        message: 'Abbonement actif !'
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

exports.changeImage = (req, res, next) => {

  const url = req.protocol + '://' + req.get('host');

  let myUrl = url + '/files/' + req.file.filename;

  User.findOneAndUpdate({_id: req.userId}, {image: myUrl}).then(
    () => {
      res.status(201).json({
        message: 'Image de profil changer !'
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
