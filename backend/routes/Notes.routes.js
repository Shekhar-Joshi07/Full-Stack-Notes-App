const express = require("express")
const notesRouter = express.Router()
const {NotesModel} = require("../models/Notes.model")
notesRouter.get("/",async(req,res)=>{
    try {
        const data= await NotesModel.find({user:req.body.user});
         res.send({ success: true, data });
     } catch (error) {
         res.send({ error: error.message });
     }
 });

 notesRouter.get("/:id", async (req, res) => {
    try {
       const data= await NotesModel.findById(req.params.id);
        res.send({ success: true, data });
    } catch (error) {
        res.send({ error: error.message });
    }
});

notesRouter.post("/create",async(req,res)=>{
    try {
        await NotesModel.create(req.body);
        res.send({ message: "notes added" });
    } catch (error) {
        res.send({ error: error.message });
    }
});

notesRouter.delete("/delete/:id",async(req,res)=>{
    try {
        const data= await notesModel.findByIdAndDelete(req.params.id);
         res.send({ success: true,deleted: data });
     } catch (error) {
         res.send({ error: error.message });
     }
 });

 notesRouter.patch("/:id", async (req, res) => {
    try {
       await NotesModel.findByIdAndUpdate(req.params.id,req.body);
        res.send({ success: true,message:"Successfully updated"});
    } catch (error) {
        res.send({ error: error.message });
    }
});


module.exports  = {
    notesRouter
}