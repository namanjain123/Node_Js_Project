const jobs = require('../models/jobs');

//Create and Save a new
exports.create=async (req,res)=>{
    if(!req.body.DepartmentName && !req.body.Departmentid){
        res.status(400).send({message:"Content can not be empty!"});
    }
    const user= new jobs({
        Id:req.body.Id,
        name:req.body.name,
        jobDescription:req.body.jobDescription,
        recruitername:req.body.recruitername,
        email:req.body.email,
        contact:req.body.contact,
    });
    await user.save().then(data =>
        {
            res.send({
                message: "Created Succesfully",
                user:data
            });
        }).catch(err =>{
            res.status(500).send({
                message:err.message ||"Some error Occured for department creation"
            });
        });
};
//retrive all from the database
exports.findAll = async (req,res) =>{
    try{
        const dep = await jobs.find();
        res.status(200).json(dep);
    }catch(error){
        res.status(404).json({message: error.message});
    }
};

//Find a single entity with an id
exports.findOne = async (req,res) => {
    try{
        const dep=await jobs.findById(req.params.id);
        res.status(200).json(dep);
    }catch(error){
        res.status(404).json({ message:error.message});
    }
};

//Update the data by the id in the request
exports.update = async(req,res)=>{
    if(!req.body){
        res.status(400).send({
            message:"Data to update can not be empty!"
        });
    }
    const id=req.params.id;
    await jobs.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await jobs.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `User not found.`
          });
        } else {
          res.send({
            message: "User deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};

