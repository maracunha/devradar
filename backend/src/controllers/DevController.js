const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");
const { findConnections, sendMessage } = require("../websocket");

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });

      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray
      );

      console.log(`> sendSocketMessageTo: ${sendSocketMessageTo.length}`);

      sendMessage(sendSocketMessageTo, "new-dev", dev);
    }

    return res.json(dev);
  },

  async update() {
    // nome, avatar, lcalizacao, techs e a bio
    // não permitir troca o github_username
  },

  async destroy(req, res) {
    const { _id } = req.params;
    const dev = await Dev.findOne({ _id });

    if (!dev) {
      return res
        .status(404)
        .json({ message: "Could not find user wiht that github username" });
    } else {
      dev.deleteOne({ _id });
      return res.status(200).json({ status: "OK" });
    }
  }
};
