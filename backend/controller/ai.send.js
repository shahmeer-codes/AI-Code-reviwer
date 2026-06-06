import main from "../services/ai_service.js"

export const send_to_ai = async (req,res)=>{
    const {prompt} =req.body;
    if(!prompt){
        res.status(400).json({
            message:"Prompt is required"
        })
    }
    const response_of_ai = await main(prompt);
    res.status(200).json({
        message:"Code review generated successfully",
        data:response_of_ai
    })
}