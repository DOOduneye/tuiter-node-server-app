import mongoose from 'mongoose';

const tuitsSchema = mongoose.Schema({ 
    topic: String,
    username: {
        type: String,
        default: 'NASA',
        required: true
    },
    handle: {
        type: String,
        default: '@NASA',
        required: true
    },
    time: {
        type: String,
        default: '1h',
        required: true
    },
    image: {
        type: String,
        default: 'https://pbs.twimg.com/profile_images/1351781780/nasa-logo-web-rgb_400x400.png',
        required: true
    },
    title: {
        type: String,
        default: 'NASA',
        required: true
    },
    tuit: String,
    likes: {
        type: Number,
        default: 0,
    }, 
    liked: {
        type: Boolean,
        default: false
    },
    replies: {
        type: Number,
        default: 0,
    },
    retuits: {
        type: Number,
        default: 0,
    }
}, {collection: 'tuits'});

export default tuitsSchema;
