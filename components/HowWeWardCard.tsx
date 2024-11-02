import Image from 'next/image';
import whatWeDo1 from '../public/images/what-we-do-1.png';
const HowWeWorkCard = () => {
  return (
    <div className='flex flex-col items-center'>
        <Image
        width={87}
        height={39}
        alt='Your One Stop Trip to India'
          src={whatWeDo1}
          />
      <div className=" mt-5  text-[22px] tracking-[0.1px] text-center ">
        Start by providing some basic information, such as the number of
        travellers and the days in India, using the <span className="text-main-red uppercase">“START MY JOURNEY”</span>  button.
        We'll get in touch with you shortly.
      </div>

 
    </div>
  );
};

export default HowWeWorkCard;
