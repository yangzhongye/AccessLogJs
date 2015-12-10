var accessBiz = require("../biz/accessBiz");

module.exports = function (app) {
    app.get("/users/accessSave", function (req, res) {
        //获取访问的数据
        var accessInfo = {
            remoteIp: req.ip,
            accessTime: new Date()
        };
        //保存数据
        accessBiz.saveAccessLog(accessInfo);
        res.send(accessInfo);
    });

    app.get("/users/findAccessList",function(req, res){
        accessBiz.findAccessList(function(accessList){
            console.log(accessList)
            res.send(accessList);
        });
    });
}
