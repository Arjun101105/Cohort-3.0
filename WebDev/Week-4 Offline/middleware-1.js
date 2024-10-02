const express = require("express");
const app = express();

// function that returns a boolean if age of the person is more than 14

function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}
// middleware alternative
// if all routes use the middleware => simply use `app.use(middlewareMethod)`

function middlewareMethod(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(411).json({
      msg: "Sorry you are not of age yet ...",
    });
  }
}

// ride 1
app.get("/ride1", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have successfully ridden ride one !",
    });
  } else {
    res.status(411).json({
      msg: "sorry you are not of age yet ..",
    });
  }
});

// ride 2
app.get("/ride2",middlewareMethod,function (req, res) {
  res.json({
    msg: "You have successfully ridden ride two !",
  });
});

// ride 3
app.get("/ride3", middlewareMethod, function(req,res){
    res.json({
        msg:"You have successfully ridden ride three !"
    })
})



app.listen(3000);
console.log(`listening on port 3000 ...`);
