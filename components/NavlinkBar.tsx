import Link from "next/link"

const NavlinkBar = () => {
    return (
        <div className="hidden md:block w-full py-5 bg-main-red md:flex justify-center">
            <div className="uppercase flex gap-[70px] justify-center text-[18px] font-medium text-white">
                <Link href={"/"} className="">
                How we Work
                </Link>
                <Link href={"/"} className="">
                India's must know
                </Link>
                <Link href={"/"} className="">
                Service & fees
                </Link>
                <Link href={"/"} className="">
                Faq
                </Link>
            </div>

        </div>
    )
}
export default NavlinkBar