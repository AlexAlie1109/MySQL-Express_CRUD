const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

const db = require('./db.js');

app.get('/looney', function(req, res){
  db.query("SELECT * FROM looney_tunes", function(err, data){
    try{
      if (err){
        throw err
      }
      res.json({success: true, data: data});
    }catch(e){
      res.json({success: false, error: e});
    }
  })
});

app.get('/looney/:name', function(req, res){
  let characterName = req.params.name.split("+").join(" ");
  let character = "SELECT * FROM looney_tunes WHERE name= '"+characterName+"'";
  db.query(character, function(err, data){
    try{
      if(err){
        throw err
      }
      if(data != 0){
        console.log(req.params.name);
        console.log(data);
        res.json({success: true, data: data});
      }else{
        console.log("Character not found");
        res.send(`Character not found`)
      }
    }catch(e){
      res.json({success: false, error: e});
    }
  })
});

app.put('/looney/:name/:column/:update', function(req, res){
  // console.log("This is the req.body");
  console.log(req.body);
  let name = req.params.name;
  let column = req.params.column;
  let updates = req.params.update.split(" ").join("+");

  let put = "UPDATE looney_tunes SET "+column+" = '"+updates+"' WHERE name= '"+name+"' ";

  db.query(put, function(err, data){
    try{
      if(err){
        throw error
      }
      console.log(data);
      const updated = !data.message.includes("Rows matches: 0 Changed: 0 Warnings: 0");
      if(updated){
        res.json({success: true, message: "Updated Succesfully"});
      }else{
        res.status(404).json({success: false, message: "No information updated"});
      }
    }catch(e){
      res.json({success: false, error: e});
    }
  })
});

app.post('/looney/:name/:bio', function(req, res){
  let name = req.params.name;
  let bio = req.params.bio.split(" ").join("+");

  console.log(bio);

  let create = "INSERT INTO looney_tunes (name, bio) VALUES ('"+name+"', '"+bio+"')";
  db.query(create, function(err, data){
    try{
      if(err){
        throw error
      }
      console.log(data);
      if(data.affectedRows != 0){
        res.json({success: true, message: "Added" + " " + name + " " + "successfully"});
      }else{
        res.status(404).json({success: false, message: "No information updated"});
      }
    }catch(e){
      res.json({success: false, error: e});
    }
  })
});

app.delete('/looney/:name', function(req, res){
  let name = req.params.name;

  let deleteQuery = "DELETE FROM looney_tunes WHERE name= '"+name+"' ";
  db.query(deleteQuery, function(err, data){
    try{
      if(err){
        throw error
      }
      console.log(data);
      if(data.affectedRows != 0){
        res.json({success: true, message: "Successfully deleted" + " " + name});
      }else{
        res.status(404).json({success: false, message: "No cahracter found"});
      }
    }catch(e){
      res.json({success: false, error: e});
    }
  })
})







app.listen(1000, function(){
  console.log("Running on 1000");
})
