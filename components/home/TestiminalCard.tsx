// ui
import H6 from "../../ui/heading/H6";
import P from "../../ui/Paragraph/P";
interface TestiminalCardProps {
  title: string;
  description: string;
  country: string;  
  name:string;
}

const TestiminalCard: React.FC<TestiminalCardProps> = ({
  title,
  description,
  name,
  country
}) => {
  return (
    <div className="p-5 border basis-[25%] border-main-red" key={title}>
      <H6 title={`“${title}`} />
      <P
        className="mt-3 text-start leading-5 text-[18px]"
        text={description}
      />
      <P text={name} className=" mt-5 text-start " />
      <P text={country} className="m-0 text-slate-500 text-start" />
    </div>
  );
};

export default TestiminalCard;
