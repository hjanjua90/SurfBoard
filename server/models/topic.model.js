const mongoose = require("mongoose");




const TopicSchema = new mongoose.Schema(
	{
		// topic Title, validation 1-30 characters, text
		topic: {
			type: String,
			required: [true, "Topic is required"],
			maxlength: [30, " Topic should be less than 30 characters"],
		},
		duration: {
            type:String,
			required:[true, "Duration time is required"]
        },
		// nextFollowUp (Calender), date
		date: {
			type: Date,
			min:[ Date.now(), "Please choose future date"],
		},
		// additionalNotes, text
		Description: {
			type: String,
		},
		
		// stage of investment, enum
		stage: {
			type: String,
			enum: [
				"Initial Pitch",
				"Deep Dive",
				"Due Diligence Phase and Goal Alignment",
				"Negotiation",
				"Solicitation of Soft Circle",
                "Syndication",
                "First Closing",
				"Other: See Additional Notes",
			],
			required: [true, "Please select "]
		}
	},
	{ timestamps: true }
);

const Topic = mongoose.model("Topic", TopicSchema);



module.exports = Topic;