import image from "../public/images/footer-image.png";
import mobileImage from "../public/images/mobile-footer-image.png";
import logo from "../public/images/black-white-logo.png";
import textlogo from "../public/images/text-logo.png";
import facebook from "../public/icons/footer-facebook.png";
import insta from "../public/icons/footer-insta.png";
import twitter from "../public/icons/footer-twitter.png";
import picscart from "../public/icons/footer-picscart.png";
import paypal from "../public/images/footer-paypal.png";
import upi from "../public/images/upi.svg";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      {/* footer for big screens  */}
      <div
        className="hidden md:block relative bg-cover bg-center h-72"
        style={{ backgroundImage: `url(${image.src})` }}
      >
        {/* Black overlay with low opacity */}
        <div className="absolute inset-0 bg-black opacity-[0.8]"></div>

        {/* Add any other content for your footer */}
        <div className="relative text-white font-author  z-10 w-[80%] h-full py-8  mx-auto  ">
          {/* Your footer content here */}
          <div className="flex   justify-between">
            <div className="pb-2 pt-1 flex  flex-col justify-between ">
              <div className="flex gap-5  items-center">
                <div className="w-[72px] h-[72px]">
                  <Image
                    src={logo}
                    className="w-full h-full"
                    alt="Hello Atithi"
                  />
                </div>
                <div className="w-[217px] h-[44px]">
                  <Image
                    src={textlogo}
                    alt="Hello Atithi"
                    className="h-full w-full"
                  />
                </div>
              </div>
              <h4 className="text-lg uppercase font-medium tracking-wide">
                Your India Travel Expert
              </h4>
            </div>
            <div className="flex flex-col gap-8 uppercase">
              <Link href={"/"} className="text-lg font-medium tracking-wide">
                Home
              </Link>
              <div className="flex flex-col gap-3 text-lg font-light tracking-wide">
                <Link href={"/how-we-work"} className="">
                  How We Work
                </Link>
                <Link href={"/blog"}>India Must Know</Link>
                <Link href={"/services"}>Services & Fees</Link>
              </div>
            </div>
            <div className="flex flex-col gap-8 uppercase">
              <Link href={"/"} className="text-lg font-medium  tracking-wide">
                Information
              </Link>
              <div className="flex flex-col gap-3 text-lg font-light tracking-wide">
                <Link href={"/faq"} className="">
                  Faq
                </Link>
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
                <Link href={"/terms-condition"}>Terms & Conditions</Link>
              </div>
            </div>
            {/* <div className="flex gap-14  justify-center items-center">
              <div className="w-[20px] h-[40px]">
                <Image
                  src={facebook}
                  className="w-full h-full"
                  alt="Hello Atithi"
                />
              </div>
              <div className="w-[34px] h-[33px]">
                <Image
                  src={twitter}
                  className="w-full h-full"
                  alt="Hello Atithi"
                />
              </div>
              <div className="w-[33px] h-[33px]">
                <Image
                  src={picscart}
                  className="w-full h-full"
                  alt="Hello Atithi"
                />
              </div>
              <div className="w-[33px] h-[33px]">
                <Image
                  src={insta}
                  className="w-full h-full"
                  alt="Hello Atithi"
                />
              </div>
            </div> */}
            <div className="flex gap-14  justify-center items-center">
              <Link
                href="https://www.facebook.com/helloatithiindia"
                target="_blank"
              >
                <div className="w-[20px] h-[40px]">
                  <Image
                    src={facebook}
                    className="w-full h-full"
                    alt="Hello Atithi Facebook"
                  />
                </div>
              </Link>
              <Link href="https://x.com/HelloAtithi" target="_blank">
                <div className="w-[34px] h-[33px]">
                  <Image
                    src={twitter}
                    className="w-full h-full"
                    alt="Hello Atithi Twitter"
                  />
                </div>
              </Link>
              <Link
                href="https://in.pinterest.com/helloatithi/"
                target="_blank"
              >
                <div className="w-[33px] h-[33px]">
                  <Image
                    src={picscart}
                    className="w-full h-full"
                    alt="Hello Atithi Pinterest"
                  />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/hello_atithi"
                target="_blank"
              >
                <div className="w-[33px] h-[33px]">
                  <Image
                    src={insta}
                    className="w-full h-full"
                    alt="Hello Atithi Instagram"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="my-5 border border-white"></div>
          <div className="flex justify-between tracking-wider text-lg font-medium">
            <div className="">
              2019-2024 © <span className="text-main-red">Hello Atithi</span> .
              - All Rights Reserved
            </div>
            <div className="flex gap-5">
              <div>Payment Partner:</div>
              <div className="w-[96px] h-[24px]">
                <Image
                  src={paypal}
                  className="w-full h-full"
                  alt="Hello Atithi"
                />
              </div>
              <div className="w-[96px] h-[24px] bg-white rounded-md">
                <Image src={upi} className="w-full h-full" alt="Hello Atithi" />
              </div>
            </div>
            <div className="text-lg font-medium">
              Incubated by <span className="text-main-red">AIC-JKLU</span>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* footer for mobile view  */}
      <div
        className="sm:hidden relative bg-cover bg-center "
        style={{ backgroundImage: `url(${mobileImage.src})` }}
      >
        {/* Black overlay with low opacity */}
        <div className="absolute inset-0 bg-black opacity-[0.8]"></div>

        {/* Add any other content for your footer */}
        <div className="relative  text-white font-author  z-10  h-full py-8  mx-auto  ">
          {/* Your footer content here */}
          <div className="flex flex-col gap-3">
            <div className="pb-2  pt-1 flex flex-col justify-between ">
              <div className="flex flex-col gap-5  items-center">
                <div className="w-[72px] h-[72px]">
                  <Image
                    src={logo}
                    className="w-full h-full"
                    alt="Hello Atithi"
                  />
                </div>
                <div className="w-[109px] h-[22px]">
                  <Image
                    src={textlogo}
                    alt="Hello Atithi"
                    className="h-full w-full"
                  />
                </div>
              </div>

              <div className="pl-2 mt-3 flex ">
               
                <Link
                  href="https://www.facebook.com/helloatithiindia"
                  target="_blank"
                >
                  <div className="bottom-0 w-[14px] h-[29px]">
                  <Image
                    src={facebook}
                    className="w-full h-full"
                    alt="Hello Atithi"
                  />
                </div>
                </Link>
                <h4 className=" text-sm w-full uppercase   text-center font-medium tracking-wide">
                  Your India Travel Expert
                </h4>
              </div>
            </div>
            <div className="pl-2  flex gap-8">
              {/* <div className="flex flex-col gap-5 justify-center items-center">
                <div className="w-[26px] h-[25px]">
                  <Image
                    src={twitter}
                    className="w-full h-full"
                    alt="Hello Atithi"
                  />
                </div>
                <div className="w-[24px] h-[25px]">
                  <Image
                    src={picscart}
                    className="w-full h-full"
                    alt="Hello Atithi"
                  />
                </div>
                <div className="w-[24px] h-[24px]">
                  <Image
                    src={insta}
                    className="w-full h-full"
                    alt="Hello Atithi"
                  />
                </div>
              </div> */}
              <div className="flex flex-col gap-5 justify-center items-center">
                <Link href="https://x.com/HelloAtithi" target="_blank">
                  <div className="w-[26px] h-[25px]">
                    <Image
                      src={twitter}
                      className="w-full h-full"
                      alt="Hello Atithi Twitter"
                    />
                  </div>
                </Link>
                <Link
                  href="https://in.pinterest.com/helloatithi/"
                  target="_blank"
                >
                  <div className="w-[24px] h-[25px]">
                    <Image
                      src={picscart}
                      className="w-full h-full"
                      alt="Hello Atithi Pinterest"
                    />
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/hello_atithi"
                  target="_blank"
                >
                  <div className="w-[24px] h-[24px]">
                    <Image
                      src={insta}
                      className="w-full h-full"
                      alt="Hello Atithi Instagram"
                    />
                  </div>
                </Link>
              </div>

              <div className="flex flex-col gap-8 text-xs uppercase">
                <Link href={"/"} className="text-xs font-medium tracking-wide">
                  Home
                </Link>
                <div className="flex flex-col gap-3 text-xs font-light tracking-wide">
                  <Link href={"/how-we-work"} className="">
                    How We Work
                  </Link>
                  <Link href={"/blog"}>India's Must Know</Link>
                  <Link href={"/services"}>Services & Fees</Link>
                </div>
              </div>
              <div className="pl-5  flex flex-col gap-8 uppercase">
                <div className=" text-xs font-medium tracking-wide">
                  Information
                </div>

                <div className="flex flex-col gap-3 text-xs font-light tracking-wide">
                  <Link href={"/faq"} className="">
                    Faq
                  </Link>
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>
                  <Link href={"/terms-condition"}>Terms & Condition</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center  justify-center gap-2">
            <div>Payment Partner:</div>
            <div className="w-[57px] h-[16px]">
              <Image
                src={paypal}
                className="w-full h-full"
                alt="Hello Atithi"
              />
            </div>
            <div className=" w-[57px] h-[16px] bg-white rounded-[4px]">
              <Image src={upi} className="w-full h-full" alt="Hello Atithi" />
            </div>
          </div>
          <div className="my-5 w-[90%] mx-auto border-2  z-10 border-white"></div>
          <div className="flex flex-col justify-evenly text-sm sm:text-lg font-medium">
            <div className="text-center">
              2019-2024 © <span className="text-main-red">Hello Atithi</span> .
              - All Rights Reserved
            </div>

            <div className="mt-3 text-sm sm:text-lg text-center font-medium">
              Incubated by <span className="text-main-red">AIC-JKLU</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
