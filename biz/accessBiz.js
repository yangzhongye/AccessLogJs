var dbHandle = require("../db/dbHandle");

module.exports = {
    saveAccessLog: function (accessInfo) {
        var AccessInfo = dbHandle.getModel("accessInfo");
        AccessInfo.create(accessInfo, function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                console.log(doc);
            }
        });
    },

    findAccessList:function(callback){
        var AccessInfo = dbHandle.getModel("accessInfo");
        AccessInfo.find({},function(err, docs){
            callback(docs);
        });
    }
}