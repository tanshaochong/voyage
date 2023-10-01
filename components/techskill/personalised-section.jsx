'use client';

import './personalise.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import PersonaliseCard from '@/components/techskill/personalised-course-card';

export default function PersonaliseSection({ recommendedCourses }) {
  return (
    <section className=" projects hidden md:block" id="projects">
      <div className="flex projects__container">
        <button className="projects__swiper-prev bg-transparent">
          <ChevronLeft className="w-28" />
        </button>
        <Swiper
          className="projects__swiper"
          loop={true}
          grabCursor={true}
          spaceBetween={6}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.projects__swiper-next',
            prevEl: '.projects__swiper-prev',
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
          }}
          modules={[Pagination, Navigation]}
        >
          {recommendedCourses.map((course) => {
            return (
              <SwiperSlide className="projects__card-wrapper" key={course.id}>
                <PersonaliseCard course={course} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="projects__swiper-next bg-transparent">
          <ChevronRight className="w-28" />
        </button>
      </div>
    </section>
  );
}
