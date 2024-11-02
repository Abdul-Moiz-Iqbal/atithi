import HowWeWorkCard from "./HowWeWardCard"

const HowWeWork = () => {
    return(
        <div>
            <h1 className="md:mb-8 uppercase text-[22px] md:text-[35px] tracking-wide text-center font-semibold text-main-blue">
          How We Work
        </h1>
        <div className=" text-[22px] md:px-[90px] tracking-wide text-center ">
        A trip to India may look like a challenging task but we <br/>prepare you for this challenge and make it <br></br> safe and stress-free for you.  
        </div>
        <div className="md:w-[80%]  mx-auto mt-24 flex justify-center gap-x-10">

        <HowWeWorkCard/>
        <HowWeWorkCard/>
        <HowWeWorkCard/>
        </div>
        </div>
    )
}
export default HowWeWork