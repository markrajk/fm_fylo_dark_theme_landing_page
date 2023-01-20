export default function handler(req, res) {
    res.status(200).json([
        {
            name: 'Satish Patel',
            position: 'Founder & CEO, Huddle',
            img: '/images/profile-1.jpg',
            testimonial: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
        },
        {
            name: 'Bruce McKenzie Patel',
            position: 'Founder & CEO, Huddle',
            img: '/images/profile-2.jpg',
            testimonial: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
        },
        {
            name: 'Iva Boyd',
            position: 'Founder & CEO, Huddle',
            img: '/images/profile-3.jpg',
            testimonial: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
        },
    ])
}
