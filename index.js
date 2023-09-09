const express = require('express');
const moment = require('moment')

const app = express();

app.get('/api', async(req, res)=>{
const dt = new Date()

const currentUTC = moment().utcOffset(0).format('YYYY-MM-DDTHH:mm:ss[Z]')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const getDay = dt.getDay()
const presentDay = days[getDay];

//information
const info = {
        "slack_name": "Chinonso_Onuorah",
        "current_day": presentDay,
        "utc_time": currentUTC,
        "track": "backend",
        "github_file_url": "https://github.com/Emmanuel-webDev/Zuri_Task-1/index.js",
        "github_repo_url": "https://github.com/Emmanuel-webDev/Zuri_Task-1",
        "status_code": 200
    }

    if(info.slack_name === req.query.slack_name && info.track === req.query.track){
            return  res.json(info)
    } 
    
    res.sendStatus(404).send("Not Found")

});





app.listen(5000, ()=>{
    console.log("Project Running...")
})