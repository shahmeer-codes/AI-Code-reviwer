import main from "../services/ai_service.js";

export const send_to_ai = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code || !code.trim()) {
      return res.status(400).json({
        message: "Code is required",
      });
    }

    if (code.length > 10000) {
      return res.status(413).json({
        message: "Code too large",
      });
    }

    const response_of_ai = await main(code);

    return res.status(200).json({
      message: "Code review generated successfully",
      data: response_of_ai, 
    });

  } catch (error) {
    console.error("AI ERROR:", error);

    return res.status(500).json({
      message: "AI service failed",
      error: error.message,
    });
  }
};