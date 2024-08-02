const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
  const { firstname, lastname, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'iamjesusandimchill@gmail.com', // Your email
      pass: 'Hello123@'   // Your email password or an app-specific password
    }
  });

  const mailOptions = {
    from: email,
    to: 'bloc.doc.alpha@gmail.com', // Your receiving email
    subject: 'New Contact Form Submission',
    text: `
      First Name: ${firstname}
      Last Name: ${lastname}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: 'Email sent: ' + info.response });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
