const express = require('express')
const score = require('../models/score')
const scoreRouter = express.Router()

scoreRouter.route("/")
    .get((req, res) => {
        score.find({user: req.user._id}, (err, score) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(score)
        })
    })
    .post((req, res) => {
        const newScore = new score(req.body);
        
        newScore.user = req.user._id;

        newScore.save((err, score) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(score)
        })
    })
scoreRouter.route("/:_id")
    .get( (req, res) => {
        score.findById({_id: req.params._id, user: req.user._id}, (err, score) => {
            if(err) return res.status(500).send(err)
            if(!score) return res.status(404).send(err)
            return res.status(200).send(score)
        })
    })
    .put((req,res) => {
        score.findOneAndUpdate(
            {_id: req.params._id, user: req.user._id},
            req.body,
            {new:true},
            (err, score) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(score)
            }
        )
    })
    .delete((req, res) => {
        score.findOneAndRemove(
            {_id: req.params._id, user: req.user._id},
            (err, score) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(score)
            }
        )
    })

module.exports = scoreRouter