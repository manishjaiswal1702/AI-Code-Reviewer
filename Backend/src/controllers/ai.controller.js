// src/controllers/ai.controller.js

import generateContent from "../services/ai.service.js";

export const getReview = async (req, res) => {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const response = await generateContent(code);

    res.status(200).json({ review: response });

  } catch (error) {
    console.error("Controller Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
