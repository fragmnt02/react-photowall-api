const fetch = require("node-fetch");
const fs = require("fs");

const resolvers = {
  Query: {
    getDatabase: () => {
      var obj = JSON.parse(fs.readFileSync("db.json", "utf8"));
      return obj;
    }
  },
  Mutation: {
    addPhoto: (_, args, ctx) => {
      const { photo } = args;
      var obj = JSON.parse(fs.readFileSync("db.json", "utf8"));
      var {photos}=obj;
      photos.push(photo);
      obj.photos=photos;
      let data = JSON.stringify(obj);  
      fs.writeFileSync('db.json', data); 
      return obj;
    }
  }
};

module.exports = resolvers;
