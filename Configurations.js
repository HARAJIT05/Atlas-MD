require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "916295517205";   // You can replace this number with yours //
}


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://harajit:12345@cluster0.b4soomk.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "HARAJIT";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Atlas Bot`;
global.author = process.env.AUTHOR || "by: Team Atlas";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "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";
global.owner = gg.split(",");

module.exports = {
  mongodb: global.mongodb,
};
