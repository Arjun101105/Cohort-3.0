const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const JWT_SECRET = "kasdoianajsnd@1231239jdskdaldn";
const bcrypt = require("bcrypt")
const {z} = require("zod")

mongoose.connect("mongodb+srv://arjunnair101105:Arjun101105@cluster0.sjcyi.mongodb.net/Todo-App")
const app = express();

app.use(express.json());

// sign-up endpoint
app.post("/signup", async function (req, res) {

  // ************ assignment ************************* //
  // check that the password has 1 upper case, 1 lower case and 1 spl char

  const requiredBody = z.object({
    email: z.string().min(3).max(50).email(),
    name: z.string().min(3).max(30),
    password: z.string().min(6).max(30)
  })

  const parsedData = requiredBody.safeParse(req.body)
  if(!parsedData.success){
    res.json({
      message: "Invalid Format !!",
      error: parsedData.error
    })
    return
  }

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const hashedPass = await bcrypt.hash(password, 5)

  let errorThrown = false;

  try{await UserModel.create({
    email: email,
    password: hashedPass,
    name: name,
  })
  }catch(e){
    res.json({
      message: "User already exists !"
    })
    errorThrown = true;
  }

  if(!errorThrown){
    res.json({
      message: "You are signed up !",
    });
  }
});

// sign-in endpoint
app.post("/login", async function (req, res) {
    
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  });

  if(!user){
    res.status(403).json({
      message: "User does not exist !"
    })
    return
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (passwordMatch) {
    const token = jwt.sign({
      id: user._id
    }, JWT_SECRET);
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
});

// todo endpoint to add a todo
app.post("/todo",auth, function (req, res) {
    const userId = req.userId
    const title =  req.body.title
    const done = req.body.done

    TodoModel.create({
        title,
        userId,
        done
    })

    res.json({
        message: "Todo-Created"
    })
});

// todo enpoint to see/GET all todos
app.get("/my-todos", auth, async function (req, res) {
    const userId = req.userId
    const todos = await TodoModel.find({
        userId: userId
    })
    res.json({
        todos
    })
});

function auth(req,res,next){
    const token = req.headers.token
    
    const decodedInfo = jwt.verify(token, JWT_SECRET)

    if(decodedInfo){
        req.userId = decodedInfo.id
        next()
    }else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
}

app.listen(3000);
