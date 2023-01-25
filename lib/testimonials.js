import axios from "axios";

export const getAllTestimonials = async () => {
    try {
        const { data } = await axios.get('http://localhost:3000/api/testimonials')
        return data
    } catch (error) {
        return error
    }
}