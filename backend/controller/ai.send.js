import main from "../services/ai_service.js"

export const send_to_ai = async (req,res)=>{
    const {code} =req.body;
    if(!code){
        res.status(400).json({
            message:"Code is required"
        })
    }
    const response_of_ai = await main(code);
    res.status(200).json({
        message:"Code review generated successfully",
        data:response_of_ai
    })
}