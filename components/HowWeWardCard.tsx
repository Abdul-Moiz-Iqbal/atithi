import Image from "next/image";


interface HowWeWorkCardProps {
  image: string;
  description: React.ReactNode;
}
const HowWeWorkCard: React.FC<HowWeWorkCardProps> = ({
  image,
  description,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[100px] h-[150px]">
        <Image
          // width={87}
          // height={39}
          className="w-full h-full"
          alt="Your One Stop Trip to India"
          src={image}
        />
      </div>
      {description}
    </div>
  );
};

export default HowWeWorkCard;
