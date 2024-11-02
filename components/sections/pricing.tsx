import H4 from "../../ui/heading/H4"
import PricingCard from "../PricingCard"

const Pricing = () => {
    return (
        <div className="py-5 px-5">
            <H4 title="Pricing" className="text-main-red tracking-wider font-semibold md:text-[35px]" />
            <PricingCard/>
        </div>
    )
}

export default Pricing