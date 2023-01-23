import axios from "axios";

export const getAllTestimonials = async () => {
    try {
        return await axios.get('http://localhost:3000/api/testimonials')
    } catch (error) {
        return error
    }
}