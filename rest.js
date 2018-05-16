var mysql = require('mysql');

function REST_ROUTER(router,connection,md5) {
  var self = this;
  self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
  router.get("/",function(req,res){
      res.json({"Message" : "Connected with api!"});
  });

//All endpoints goes here

//get all comments
router.get("/getrating",function(req,res){
    var query = "SELECT * FROM ??";
    var table = ["rating"];
    query = mysql.format(query,table);
    connection.query(query,function(err,rows){
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "Success", "Users" : rows});
        }
    });
  });

//POST request
router.post("/postrating",function(req,res){
    var query = "INSERT INTO ??(??) VALUES (?)";
    var table = ["rating","rating",req.body.rating];
    query = mysql.format(query,table);
    connection.query(query,function(err,rows){
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "Rating submitted!"});
        }
    });
});

//POST comment
router.post("/addcomment",function(req,res){
    var query = "INSERT INTO ??(??,??) VALUES (?,?)";
    var table = ["comment","author", "message",req.body.author, req.body.message];
    query = mysql.format(query,table);
    connection.query(query,function(err,rows){
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "Comment submitted!"});
        }
    });
});

router.get("/getcomment",function(req,res){
    var query = "SELECT * FROM ??";
    var table = ["comment"];
    query = mysql.format(query,table);
    connection.query(query,function(err,rows){
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "Success", rows });
        }
    });
  });


}
module.exports = REST_ROUTER;