import express from "express";
import { verifyUser } from "../utils/verifyToken.js"
import { createReview } from '../controllers/review.js'

const router = express.Router();

router.post('/:hotelId', verifyUser, createReview)

export default router;