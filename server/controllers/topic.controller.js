const Topic = require("../models/topic.model");

module.exports = {
    findAllTopics: (req, res)=>{
        Topic.find()
            .then((allTopics)=>{
                console.log(allTopics);
                res.json(allTopics)
            })
            .catch((err)=>{
                console.log("findAllTopics has failed!");
                res.json({ message: "Something went wrong in findAll", error: err })
            })
    },

    createNewTopic: (req, res)=>{
        Topic.create(req.body)
            .then((newTopic)=>{
                console.log(newTopic);
                res.json(newTopic);
            })
            .catch((err)=>{
                console.log("Something went wrong in createNewTopic");
                res.status(400).json(err)
            })
    },

    findOneTopic: (req, res)=>{
        Topic.findOne({ _id: req.params.id })
            .then((oneTopic)=>{
                console.log(oneTopic);
                res.json(oneTopic);
            })
            .catch((err)=>{
                console.log("Find One Topic failed");
                res.json({ message: "Something went wrong in findOneTopic", error: err })
            })
    },

    deleteOneTopic: (req, res)=>{
        Topic.deleteOne({_id: req.params.id})
            .then((deletedTopic)=>{
                console.log(deletedTopic);
                res.json(deletedTopic);
            })
            .catch((err)=>{
                console.log("delete One Topic failed");
                res.json({ message: "Something went wrong in deleteOneMovie", error: err })
            })
    },


    updateTopic: (req, res)=>{
        //This Mongoose query requires both a parameter AND body from the request!
        Topic.findOneAndUpdate({_id: req.params.id},
            req.body,
            //These options return a new doc and allow schema valids to run on PUT req
            {new: true, runValidators: true}
            )
            .then((updatedTopic)=>{
                console.log(updatedTopic)
                res.json(updatedTopic)
            })
            .catch((err)=>{
                console.log("Something went wrong in createNewTopic");
                res.status(400).json(err) //See above (explained in create)
            })
    }
}
