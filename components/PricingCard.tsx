import ShadowCard from "../ui/Card/ShadowCard"
import H4 from "../ui/heading/H4"
import H6 from "../ui/heading/H6"
import P from "../ui/Paragraph/P"
import PlanCard from "./PlanCard"
// import solo from "../public/images/plan-solo.png"

const PricingCard = () => {
    return(
        <ShadowCard className={"lg:w-[80%] mx-auto pb-10 px-5 py-5 mt-4 shadow-card-red "}>
            <div className="flex flex-col md:flex-row justify-center gap-10 ">
                <div className="basis-[30%]">
                    <H4 title="Select your plan" className=" text-start normal-case text-[30px]"/>
                    <P className="text-start mt-5 text-[1.2rem] tracking-wide leading-2" text="This plan offers you the ultimate solution for a stress-free and safe journey throughout India. "/>
                    <P className=" text-start text-main-red text-[1.2rem]" text="Pay only for your trip days in India"/>
                </div>
                <PlanCard/>
                <PlanCard/>
                <PlanCard/>

            </div>
        </ShadowCard>
    )
}

export default PricingCard