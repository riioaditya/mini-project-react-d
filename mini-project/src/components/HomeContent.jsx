import React from 'react'
import Jkt48 from '../assets/jkt-48.svg'
import ReplyArrow from '../assets/reply-arrow.svg'
import TagEvent from '../assets/tag-event.svg';
import TagBirthday from '../assets/tag-birthday.svg';
import TagOther from '../assets/tag-other.svg';
import TagTheater from '../assets/tag-theater.svg';

const HomeContent = () => {
  return (
    <>
    <div> {/* div gambar */}
      <img src={Jkt48} alt="gambar tidak ada" className='12pro:mx-custom-70px 12pro:my-custom-50px 12pro:w-custom-250px 12pro:h-custom-300px' />
    </div>
    <div className='bg-white-500 12pro:w-custom-290px border-2 12pro:mx-custom-50px 12pro:h-custom-210px rounded-10px shadow-news-box'> {/* frame content news */}
        <div className='flex justify-center pt-2px 12pro:text-xl'> {/* text news */}
          news
        </div>
        <div className='12pro:m-5 bg-lavender-blush-500 rounded-10px 12pro:w-custom-250px 12pro:h-custom-170px 12pro:mt-auto shadow-content-news-box'> {/* wrap content news */}
          <div>
              <div className='12pro:pl-5 12pro:pt-5 12pro:pr-30px 12pro:pb-35px'> {/* ini grup acara */}

              {/* INI CONTENT */}
              <div className='flex'> {/* header news contents */}
              <img src={TagEvent} alt=""  />
              <p className=' 12pro:text-10  12pro:font-normal'>
                22 April 2022
                </p> 
              </div>
              <div className='12pro:text-5'> {/* isi linked content */}
              <a href='https://jkt48.com/news/detail/id/1555?lang=id'>Pengumuman Mengenai Event 2-Shot Online CHEKICHA X JKT48</a>
              </div>
              </div>
              <div> {/* button next */}
              <div>
              
              <div>
              
              </div>
              </div>
              
              </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default HomeContent