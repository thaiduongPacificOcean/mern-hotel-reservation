import Hotel from '../models/Hotel.js'
import Review from '../models/Review.js'

export const createReview = async (req, res) => {

    const hotelId = req.params.hotelId
    
    const newReview = new Review({ ... req.body})

    try {
        const savedReview = await newReview.save()

        await Hotel.findByIdAndUpdate(hotelId, {
            $push: { reviews: savedReview._id }
        })
        res.status(200).json({ success: true, message: 'Review submited', data: savedReview})

    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to submit' })

    }
}
