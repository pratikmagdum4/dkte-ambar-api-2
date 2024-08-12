import { createMainEvent,getMainEvent,updateMainEvent,deleteMainEvent } from "./MainEventsCommonController.js";

const handleMainEvents = async (req,res,action)=>{
    const {eventName} = req.params;
    const {dept} = req.params
    switch (action)
    {
        case "create":
            await createMainEvent(req, res, eventName, dept);
            break;
        case "get":
            await getMainEvent(req,res,eventName);
            break;
        case "update":
            await updateMainEvent(req,res,eventName);
            break;
        case "delete":
            await deleteMainEvent(req,res,eventName);
            break;
        default:
            res.status(400).json({message: "Invalid action"});
            break;
    }
}

export {handleMainEvents};