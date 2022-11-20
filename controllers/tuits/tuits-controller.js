import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits  = (req, res) => {
    const topic = req.query.topic;
    if (topic) {
        const tuit = tuits.filter(tuit => tuit.topic === topic);
        res.json(tuit);
        return
    }

    res.json(tuits)
}

const findTuitById = (req, res) => {
    const tid = req.params.tid;
    const tuit = tuits.find(tuit => tuit._id === tid);
    res.json(tuit);
}

const updateTuit = (req, res) => {
    const tuitId = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex((tuit) => tuit._id === tuitId);
    tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitId = req.params.tid;
    tuits = tuits.filter(tuit => tuit._id !== tuitId);
    res.sendStatus(200);
}

const TuitsController = (app) => {
    app.get('/api/tuits', findTuits);
    app.get(`/api/tuits/:tid`, findTuitById);
    app.post('/api/tuits', createTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', updateTuit);
}

export default TuitsController;
