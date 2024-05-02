import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Palak Parikh ',
            text:
                'The services provided by the officials was smooth and satisfactory. Products and goods delivered were up to satisfaction… and compared to market price..',
            likes: 4.5,
            imgae:   <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
            className="w-32 rounded-full shadow-lg dark:shadow-black/20"
          
        />
        },
        {
            id: 2,
            name: 'Navin Sharma ',
            text:
                'Purchased office chairs 5 years ago. Found them to be aesthetic and durable. Currently still using the same products..',
            likes: 4.5,
            imgae:   <img
            src="img/assets/test1.jpeg"
            className="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
        },
        {
            id: 2,
            name: 'Priti Manas',
            text:
                'The office furniture is ergonomic in design, it is very comfortable to use for long hours in office. Be it design, comfort or the shopping experience, it ticks all the boxes for us.',
            likes: 5,
            imgae:   <img
            src="img/assets/test4.jpeg"
            className="w-32 rounded-full shadow-lg dark:shadow-black/20"
           />
        }
    ];

    // Function to generate star elements
    const generateStars = (likes) => {
        const fullStars = Math.floor(likes);
        const halfStar = likes % 1 === 0.5;
        const starArray = [];

        for (let i = 0; i < fullStars; i++) {
            starArray.push(
                <li key={i}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                        <path fill="currentColor" d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                    </svg>
                </li>
            );
        }

        if (halfStar) {
            starArray.push(
                <li key="half">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                        <path fill="currentColor" d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"></path>
                    </svg>
                </li>
            );
        }

        return starArray;
    };

    return (
        <div className='p-2'>
            <div className="container  mx-auto md:px-6">
                <section className="mb-2 text-center">
                    <h2 className="mb-12 text-3xl font-bold">Customer Review</h2>
                    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="mb-12 md:mb-0">
                                <div className="mb-6 flex justify-center">
                               {testimonial.imgae} 
                                </div>
                                <h5 className="mb-2 text-lg font-bold">{testimonial.name}</h5>
                                <p className="mb-4 text-center">{testimonial.text}</p>
                                <ul className="mb-0 flex justify-center">
                                    {generateStars(testimonial.likes)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Testimonials;
