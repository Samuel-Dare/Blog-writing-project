const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./Model/Blog.js");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 1000;

mongoose
  .connect("mongodb://localhost:27017/Blog")
  .then((result) => console.log("connect db"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  //   res.send("<h1>NOTHING is promised</h1>");
  res.json("working");
});

app.get("/stories", (req, res) => {
  Blog.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/test", (req, res) => {
  const blog = new Blog({
    title: "I like Amala",
    tag: "food",
    img: "https://www.google.com/search?q=amala+images&sxsrf=ALiCzsbmBrOcIczkgsolrZT8Tm68Li260w:1654607786124&tbm=isch&source=iu&ictx=1&vet=1&fir=8hCV8h7PfRYFOM%252CpaE1AAGt-mNqbM%252C_%253Bl34f6wnq2qha1M%252CpaE1AAGt-mNqbM%252C_%253B98oHxZBvXco8qM%252CNLitbuIQDFR2kM%252C_%253BAln30C0SWBmBgM%252CGakI5MdbXfeK4M%252C_%253Bj4V-lMO3uouJLM%252CpaE1AAGt-mNqbM%252C_%253BTdOKKWdrCDqpqM%252CpaE1AAGt-mNqbM%252C_%253BxjQAJs08ZUVvaM%252CeaoUUoku5_ICJM%252C_%253BDPomtEmXcdgTAM%252CwEX98hrJw23lEM%252C_%253BH56gtBWPfgTVoM%252CS4xFn6pmdUHQNM%252C_%253B5N0kjyRfil1vUM%252CpaE1AAGt-mNqbM%252C_%253BttrDH9D9GWm9UM%252CzRys4rs9VNiPGM%252C_%253BcF-mcY26mkvA3M%252ChU0Yo_-P-L6b3M%252C_%253BupKWM3lBYFo0uM%252C5zmBjmT5uFm7FM%252C_%253BvaELFpOQKXANVM%252CD83zDTNyvCdylM%252C_%253BtNGZDbrFdkHgWM%252Csy-2RemBtf1YFM%252C_&usg=AI4_-kT1gcvxABYM3HmWBCnUxPPKOrtxqw&sa=X&ved=2ahUKEwiVx9Wqtpv4AhVRk_0HHbQADEwQ9QF6BAgDEAE#imgrc=8hCV8h7PfRYFOM",
    story: "This is the story of my life",
  });
  blog
    .save()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Listening on port ${PORT}...`);
});
