const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

const SID = process.env.SID 
const TOKEN= process.env.TOKEN 
const client = new twilio(SID,TOKEN);
const PORT = process.env.PORT 
const NUMBER = process.env.PHONE

const app = express();

app.use(cors());


app.get("/send", (req,res)=>{
	const {destination, message} = req.query;
	client.messages.create({
		body:message,
		to:destination,
		from:NUMBER,
	}).then(msg=> console.log(msg.status));
});

app.listen(PORT, ()=> console.log(`Running on PORT ${PORT}.`));