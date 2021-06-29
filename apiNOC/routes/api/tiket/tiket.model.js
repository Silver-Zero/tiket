const MongoDB = require('../../utilities/db');
const ObjectId = require('mongodb').ObjectID;
let db;
let tiketCollection;

(async function(){
    try{
      if (!tiketCollection) {
        db = await MongoDB.getDB();
        tiketCollection = db.collection("tiket");
        if(process.env.ENSURE_INDEX == 1){
        }
      }
    }catch(ex){
      console.log(ex);
      process.exit(1);
    }
})();

module.exports.getAll = async ()=>{
    try {
      let docsCursor = tiketCollection.find({});
      let rows = await docsCursor.toArray()
      return rows;
    } catch(ex){
      console.log(ex);
      throw(ex);
    }
  }