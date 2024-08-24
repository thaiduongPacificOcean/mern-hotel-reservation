import express from "express";
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
const router = express.Router();

import { createBooking, getAllBooking, getBooking } from '../controllers/booking.js'


router.post('/', verifyUser, createBooking)
router.get('/:id', verifyUser, getBooking)
router.get('/', verifyAdmin, getAllBooking)

export default router;