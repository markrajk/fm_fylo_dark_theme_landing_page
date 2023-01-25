import axios from "axios";

export const getAllTestimonials = async () => {
    try {
        const data = await axios.get(`${process.env.URL}/api/testimonials`)
        return data
    } catch (error) {
        return error
    }
}