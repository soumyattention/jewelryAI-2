import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Vaibhav Goyal',
      designation: 'Managing Director',
      company: 'Arabian Jewellers, Dubai',
      image: 'https://ik.imagekit.io/soumya3301/e66c2668f2012217377eade6d55f00bd14d1d46fa9f20f62b7a2d79a53f90e67.png?updatedAt=1750686897887',
      rating: 5,
      testimonial: 'We hired JewelryAI for a trial project and the results were far beyond my expectations. We spend $5000+ every month on photoshoot, but this creativity to choose and customise everything is what I always wished for. The Vogue styled photoshoot they made were truly impressive, I love it.',
      featured: true
    },
    {
      id: 2,
      name: 'Humna Rehman',
      designation: 'Head of Marketing & Ops',
      company: 'Noor Diamonds, Doha',
      image: 'https://ik.imagekit.io/soumya3301/88a5bb4eaed30990819205c1a3efdb9d615e6721f9d5e7562b28763194749b1e.png?updatedAt=1750686891647',
      rating: 5,
      testimonial: 'I had tried every single AI tools for months but none could generate what I was hoping for, until they came up with this concept and delivered jewelry try-on, exactly the way I imagined. This saves us both funds and hassle, and gives us freedom to choose every aspect of the photoshoot.',
      featured: false
    }
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50/20 to-yellow-50/20"></div>
      <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-amber-200/10 to-yellow-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-yellow-200/10 to-amber-300/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 px-4 sm:px-0">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Join hundreds of jewelry brands who've transformed their marketing with AI photography.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 lg:-left-12 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl touch-manipulation"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 lg:-right-12 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl touch-manipulation"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>

          {/* Testimonial Cards Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-3 sm:px-4"
                >
                  <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 mx-2 sm:mx-0">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-4 sm:mb-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-amber-400/20">
                        <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-4 sm:mb-5">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-sm sm:text-base md:text-lg text-gray-800 text-center leading-relaxed mb-6 sm:mb-8 font-medium px-2 sm:px-0">
                      "{testimonial.testimonial}"
                    </blockquote>

                    {/* Profile Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                      {/* Profile Image */}
                      <div className="relative">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-3 ring-white/50 shadow-lg">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {testimonial.featured && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                            <Star className="w-2.5 h-2.5 text-white fill-white" />
                          </div>
                        )}
                      </div>

                      {/* Profile Info */}
                      <div className="text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 mb-0.5">
                          {testimonial.designation}
                        </p>
                        <p className="text-xs sm:text-sm text-amber-600 font-semibold">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 touch-manipulation ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 scale-125 shadow-lg'
                    : 'bg-white/40 backdrop-blur-sm border border-white/50 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 sm:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4 sm:px-0">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">25+</div>
              <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">1000+</div>
              <div className="text-xs sm:text-sm text-gray-600">Images Generated</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">5/5</div>
              <div className="text-xs sm:text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;