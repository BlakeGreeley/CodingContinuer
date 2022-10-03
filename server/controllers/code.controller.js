const Code = require("../models/code.model");

// this code chunk is used to create a new input into the model:

const createNewCode = (req, res) => {
    Code.create(req.body)
        .then((newCode) => {
            res.json({newCode});
        })
        .catch((err) => {res.status(400).json({err});
    });
};

// this code chunk is used to find one data input:

const getOneCode = (req, res) => {
    Code.findOne({_id: req.params.id})
        .then((queriedCode) => {
            res.json(queriedCode);
        })
        .catch((err) => {res.status(400).json({err});
    });
};

// this code chunk is used to pull all the code inputs to one area:

const getAllCode = (req, res) => {
    Code.find()
        .then((allCode) => {
            res.json(allCode);
        })
        .catch((err) => {res.status(400).json({err});
    });
};

// this code chunk is used to update code inside the database:

const updateCode = (req, res) => {
    Link.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then((updateCode) => {
        res.json({updateCode});
    })
    .catch((err) => {res.status(400).json({err});
    });
};

// this code is used to delete an input from the database:

const deleteCode = (req,res) => {
    Code.deleteOne({_id: req.params.id})
        .then((deletedCode) => {
            res.json({deletedCode});
        })
        .catch((err) => {res.json(400).json({err});
    });
};

// the exports:

module.exports = {
    createNewCode,
    getAllCode,
    getOneCode,
    updateCode,
    deleteCode,
}
