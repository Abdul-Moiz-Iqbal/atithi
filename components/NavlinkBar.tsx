import Link from "next/link"

const NavlinkBar = () => {
    return (
        <div className=" hidden   w-full py-5 bg-main-red md:flex justify-center">
            <div className="uppercase flex gap-[70px] justify-center !text-[18px] font-medium text-white">
                <Link href={"/how-we-work"} className="text-[18px]">
                How we Work
                </Link>
                <Link href={"/blog"} className="">
                India's must know
                </Link>
                <Link href={"/services"} className="">
                Service & fees
                </Link>
                <Link href={"/faq"} className="">
                Faq
                </Link>
                <Link href={"/contact"} className="">
                Contact Us
                </Link>
            </div>

        </div>
    )
}
export default NavlinkBar