const Tasks=require('../models/tasks');
const asyncWrapper=require('../middleware/asyncWrapper')
const {createCustomError}=require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req,res)=>{
    const tasks = await Tasks.find({})
    res.status(201).json(tasks);
    
})

const getTask= asyncWrapper(async (req,res,next)=>{
    const {id:TaskID} = req.params//Destructuring with aliasing 
    const task = await Tasks.findOne({_id:TaskID})
    //If the task is not found , it returns null so we need to set code for that 
    //If we have the correct syntax for the ID but we cannot find the item , then this if gets fired
    if (!task) return next(createCustomError(`No Task with ID ${TaskID}`, 404))
        // return res.status(404).json({msg:`No Task with ID ${TaskID}`})}
    res.status(200).json({task});
// } catch (error) {
//If the id has a wrong syntax i.e its not gonna match the no of characters as an ID should have then this error gets fired (by Mongoose)
// res.status(500).json({msg:error})
})

const createTask= asyncWrapper(async (req,res)=>{
    const task = await Tasks.create(req.body)
    res.status(201).json({task})
    //500 is Internal Server Error
})

const updateTask = asyncWrapper(async (req,res,next)=>{
    const {id:TaskID} = req.params
    const task = await Tasks.findOneAndUpdate({_id:TaskID},req.body,
        {
            new:true,
            runValidators:true
            //overwrite:true if we were using put method instead of patch(also need to undo the default:true for 'completed' property)
        });
//findOneAndUpdate returns the old unupdated value and not the new one 
//We also need to setUp the validators because the Schema Validators are not gonna work here and if we try to update even with an empty string for name, its gonna go through
//Both these problems are overcomed using options parameter
    if (!task) return next(createCustomError(`No Task with ID ${TaskID}`, 404))
    res.status(200).json({task})
})

const deleteTask=asyncWrapper(async (req,res,next)=>{
    const {id:TaskID} = req.params;
    const task = await Tasks.findOneAndDelete({_id:TaskID});
    if (!task){
        return next(createCustomError(`No Task with ID ${TaskID}`, 404))
    }
    res.status(200).json({task});
    
})

module.exports={
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} ;


//With Tasks.create() , only those properties that are specified in the schema are gonna be added to the database and the rest are gonna be ignored