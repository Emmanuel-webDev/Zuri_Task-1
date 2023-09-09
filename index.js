const express = require('express');

const app = express();

app.get('/info', async(req, res)=>{
const dt = new Date()

//gets current time in millisecs
const current_time = dt.getTime()
//generate a random offset between -2 and 2 in millisecs
const offset = Math.floor(Math.random() * 5 * 60 * 1000) - 2 * 60 * 1000;
//calc time with offset applied
const adjusted_time = new Date( current_time + offset );
const utc = adjusted_time.toISOString();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const getDay = dt.getDay()
const presentDay = days[getDay];

//information
const info = [
    {
        "slack_name": "Chinonso Onuorah",
        "current_day": presentDay,
        "utc_time": utc,
        "track": "Backend",
        "github_file_url": "..",
        "github_repo_url": "..",
        "status_code": 200
    }
]

for (let index = 0; index < info.length; index++) {
    if(info[index].slack_name !== req.query.slack_name && info[index].track !== req.query.track){
             res.sendStatus(404).send("Not Found")
    } 
}
     res.json(info)

});





app.listen(5000, ()=>{
    console.log("Project Running...")
})