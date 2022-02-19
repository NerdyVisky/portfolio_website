const mongoose = require('mongoose');
const slugify = require('slugify');

const today = new Date();
const todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const blogSchema = new mongoose.Schema({
    title : {
        type: String,
        required : "Blog title cannot be empty"
    },
    published_on : {
        type: Date,
        default: todayDate
    },
    authors : {
        type: Array,
        default: [{
            "name" : "Vishvesh Trivedi", 
            "imageURL" : "https://docs.google.com/document/d/1wlcbK9Q3IWfaKdgWZOPa0iO96uMrJccZwHnAKCQQEPc/edit",
            "role": "writer"
        }]
    },
    tags : {
        type: Array
    },
    isFeatured : {
        type: Boolean,
        default: false
    },
    illustrationLink : {
        type: String
    },
    main_content : {
        type: String,
        default: "Blog body cannot be empty"
    },
    slug : {
        type: String,
        required: true,
        unique: true
    }
});

blogSchema.pre('validate', function(next){
    if(this.title){
        this.slug = slugify(this.title, {lower: true, strict: true});
    }
    next();
})

module.exports = mongoose.model('Blogs', blogSchema);