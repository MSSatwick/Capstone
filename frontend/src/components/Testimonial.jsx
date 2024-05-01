import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "Hello I am Dhanunjaya, I am enthusiastic Python developer !",
    name: "N.Dhanunjaya",
    role: "Python Developer",
    
  },
  {
    text: "Hey Kanthi here, I am driven towards Artificial Intelligence !",
    name: "N.Kanthi Kiran",
    role: "Python Developer, Matlab, Hardware Implementation",
  },
  {
    text: "Hola! Rugved this side, I like doing machine learning projects. ",
    name: "N.Rugved",
    role: "Python Developer, Matlab",
    
  },
  {
    text: "I am Prem sai and I make websites attractive and hassle-free.",
    name: "P.V.M. Prem Sai",
    role: "Web Development",
   
  },
  {
    text: "Hey there! myself Satwick and I love exploring different fields of computer science",
    name: "M.S.Satwick",
    role: "Python Developer, Web Development, Hardware Implementation",
    
  },
];
function Testimonial() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="px-2 py-10 md:px-0">
      <div>
        <h2 className="text-4xl font-bold text-center text-black">
          OUR TEAM MEMBERS
        </h2>
      </div>
      <div className="mx-auto max-w-4xl flex items-center py-4">
        <button
          className="text-black font-bold py-2 px-4 rounded"
          onClick={prevSlide}
        >
          <ArrowLeft />
        </button>
        <div className="flex-grow max-w-[40rem]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={index === current ? "block" : "hidden"}>
              <div className="md:flex md:items-center md:justify-center md:space-x-14">
                {/* <div className="relative h-48 w-48 flex-shrink-0">
                  <img
                    className="relative h-15 w-15 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div> */}
                <div className="mt-10 md:mt-0 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <blockquote>
                    <p className="text-xl text-black overflow-x-hidden ">{testimonial.text}</p>
                  </blockquote>
                  <p className="mt-7 text-lg font-semibold text-black">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-base text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="text-black font-bold py-2 px-4 rounded"
          onClick={nextSlide}
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
