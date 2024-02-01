import React, { useState, useEffect, useRef } from 'react';

export default function Index() {
  const [isTitleSticky, setIsTitleSticky] = useState(false);
  const [isIntroSticky, setIsIntroSticky] = useState(false);

  const titleRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (titleRef.current && introRef.current) {
        const titleOffsetTop = titleRef.current.offsetTop;
        const introOffsetTop = introRef.current.offsetTop;

        setIsTitleSticky(scrollTop >= titleOffsetTop && scrollTop < introOffsetTop);
        setIsIntroSticky(scrollTop >= introOffsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='h-[900rem]'>
        <ul className='text-right'>
          <div>
            <li ref={titleRef} className={`bg-white text-black text-lg border-b-8 ${isTitleSticky ? 'border-sky-500 sticky top-0' : ''}`}>عنوان مطالب این جلسه</li>
            <li>لورم</li>
            <li>لورم</li>
            <li>لورم</li>
            <li>لورم</li>
            <li>لورم</li>
            <li>لورم</li>
          </div>
          <div ref={introRef}>
            <li className={`bg-white text-black text-lg border-b-8 ${isIntroSticky ? 'border-sky-500 sticky top-0' : ''}`}> مقدمه: تقسیم احکام</li>
            <li>لورم</li>
            <li>لورم</li>
            <li>لورم</li>
            <li>لورم</li>
            <li>لورم</li>
            <li>لورم</li>
          </div>
        </ul>
      </div>
    </>
  );
}
