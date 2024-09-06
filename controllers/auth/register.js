const { Users } = require("../../db/models/index").db;
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const sendMail = require("../../functions/sendVerificationCode.js");

module.exports = async (req, res) => {
  console.log(req?.body);

  const { username, password, verificationPassword, mail, fullName } =
    req?.body;

  if (
    !username ||
    !password ||
    !verificationPassword ||
    !mail ||
    !fullName ||
    password != verificationPassword
  ) {
    res.status(400).json({ error: true, errorMessage: "Bad request" });
  } else {
    try {
      const existMail = await Users.findOne({
        where: {
          mail: mail,
        },
      });
      const existUser = await Users.findOne({
        where: {
          username: username,
        },
      });
      if (existUser || existMail)
        res.status(409).json({
          error: true,
          errorMessage: existUser
            ? "username exists"
            : "email exists"
        });
      else {
        const verificationString = crypto
          .randomBytes(5)
          .toString("hex")
          .slice(0, 5);
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await Users.create({
          username,
          mail,
          verificationString,
          verified: false,
          password: hashedPassword,
          fullName
        });
        const token = jwt.sign(
          { id: user.id },
          process.env.VERIFICATIONSECRETKEY,

          {}
        );
        res.cookie("verify", token, { maxAge: 1000 * 60 * 10, httpOnly: true ,secure:true});

        sendMail(mail, verificationString);

        res
          .status(200)
          .json({ error: false, message: "verification code sent" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: true,
        errorMessage: err,
      });
    }
  }
};
