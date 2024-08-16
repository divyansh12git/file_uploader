const express = require('express')
const path=require("path");
const multer  = require('multer')


const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

// const upload = multer({ dest: 'uploads/' })//seting up the folder ot upload files

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"./uploads")
    },
    filename:function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`);
    }
    
})
const upload=multer({storage:storage});
                    //upload.fields([{name:"uploadImage",.... for more than a single file}])
app.post("/upload",upload.single("uploadImage"),(req,res)=>{//uploadImage is the file name from frontend...
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/");
})

app.get("/",(req,res)=>{
    res.render("homepage");
})

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})