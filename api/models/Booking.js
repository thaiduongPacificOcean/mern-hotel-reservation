import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
        },
        userEmail: {
            type: String,
        },
        hotelName: {
            type: String,
            required: true
        },
        fullname: {
            type: String,
            required: true,
        },
        guestSize: {
            type: Number,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        checkInDate: {
            type: Date,
            required: true
        },
        checkOutDate: {
            type: Date,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);