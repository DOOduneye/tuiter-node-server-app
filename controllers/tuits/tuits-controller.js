import * as tuitsDao from '../tuits/tuits-dao.js'

const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body
    const tuit = await tuitsDao.createTuit(newTuit);    
    res.json(tuit);
}

const deleteTuit = async (req, res) => {
    const tuitId = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitId);
    res.json(status);
}

const updateTuit = async (req, res) => {
    const tuitId = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitId, updates);
    res.json(status);
}

const TuitsController = (app) => {
    app.get('/api/tuits', findTuits);
    app.post('/api/tuits', createTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', updateTuit);
}

export default TuitsController;
