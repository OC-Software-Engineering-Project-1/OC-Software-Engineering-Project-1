import passport from "passport";
import dotenv from "dotenv";
import strategy from "passport-facebook";
require('dotenv').config()
const sendGrid = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SendGridApiKey);
export default {
    data() {
        return {
            Create: {
                Name: "",
                email: "",
                password: ""
            }
        };
    },
    methods: {
        async Createuser(){
            
            let token = response.data.token;
            if (token) {
                localStorage.setItem("jwt", token);
                this.$router.push("/");
                alert("Success", "Registration Was successful", "success");
            } else {
                alert("Error", "Something Went Wrong", "error");
            }
        
    },
},
};


module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
      Name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isVerified: DataTypes.BOOLEAN
    }, {
      classMethods: {
        associate: function(models) {
         user.hasOne(models.VerificationToken, {
              as: 'verificationtoken',
              foreignKey: 'userId',
              foreignKeyConstraint: true,
            });
        }
      }
    });
    return user;
  }; 


  module.exports = function(sequelize, DataTypes) {
    var VerificationToken = sequelize.define('VerificationToken', {
            userId: DataTypes.STRING,
            token: DataTypes.STRING
        }, {
        classMethods: {
            associate: function(models) {
                verificationtoken.belongsTo(models.User, {
                    as: "user",
                    foreignKey: "userId",
                    foreignKeyConstraint: true
                });
            }
        }
    });
    return VerificationToken;
    };

    // Email using send grid
    export const sendVerificationEmail = (to, token) => {
        const hostUrl = process.env.hostURL;
        const request = sg.emptyRequest({
          method: "POST",
          path: "/v3/mail/send",
          body: {
            personalizations: [
              {
                to: [
                  {
                    email: to
                  }
                ],
                subject:"Verify Your Email"
              }
            ],
            from: {
              email: "no-reply@example.com"
            },
            content: [
          {
            type: 'text/plain',
            value: `Click on this link to verify your email ${hostUrl}/verification?token=${token}&email=${to}`
          }
        ]
          }
        });
        return new Promise(function (resolve, reject) {
          sg.API(request, function (error, response) {
            if (error) {
              return reject(error);
            }
            else {
              return resolve(response);
            }
          });
        });
      };
const FacebookStrategy = strategy.Strategy;

dotenv.config();
passport.serializeuser(function(user, done) {
  done(null, user);
});

passport.deserializeuser(function(obj, done) {
    done(null, obj);
  });
  
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        profileFields: ["email", "name"]
      },
      function(accessToken, refreshToken, profile, done) {
        const { email, name } = profile._json;
        const userData = {
          email,
          firstName: name
        };
        new userModel(userData).save();
        done(null, profile);
      }
    )
  );
