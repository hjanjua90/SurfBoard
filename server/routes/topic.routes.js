const TopicController = require("../controllers/topic.controller");

module.exports = (app) =>{
    app.get("/api/topics", TopicController.findAllTopics);
    
    //if data is being sent to my server to create a new document, we use a POST HTTP Verb
    app.post("/api/topics", TopicController.createNewTopic);

    //Make sure calls with params go after the previous calls!    
    app.get("/api/topics/:id", TopicController.findOneTopic);

    //The parameter id, as defined in the controller MUST MATCH
        //what we defined it as in the controller!
    app.delete("/api/topics/:id", TopicController.deleteOneTopic);

    app.put("/api/topics/:id", TopicController.updateTopic);
}