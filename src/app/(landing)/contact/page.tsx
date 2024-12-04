"use client";
import Image from "next/image";

// image
import lakeImage from "../../../../public/images/lake-image.png";
import H4 from "../../../../ui/heading/H4";

// react icons
import { LiaPhoneSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import { VscMap } from "react-icons/vsc";



export default function ContactUs() {
  return (
    <div className="font-author">
      <div>
        <Image src={lakeImage} alt="Servies" />
      </div>

      <div className="py-5 ">
        {/* form and contact us details contianer  */}
        <div className="sm:w-[90%] px-4 sm:px-10 pb-5 sm:py-10 mx-auto shadow-card-red rounded-[20px] flex flex-col sm:flex-row gap-5 ">
          {/* contact form  */}
          <div className=" sm:w-[50%] ">
            <H4
              title="Contact Us"
              className="text-start normal-case text-main-red text-[35px]"
            />
            <div className="mt-10 flex gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-2 border placeholder:text-[20px] border-main-red "
              />
              <input
                type="text"
                placeholder="Your Country*"
                className="w-full p-2 border border-main-red placeholder:text-[20px]"
              />
            </div>
            <input
              type="text"
              placeholder="Email*"
              className=" w-full mt-6 p-2 border border-main-red placeholder:text-[20px]"
            />

            <textarea
              placeholder="Message*"
              rows={7}
              className="w-full mt-6 p-2 border border-main-red placeholder:text-[20px]"
            ></textarea>
            <div className="mt-6 flex gap-4">
              <button className="px-7 py-[10px] w-[50%]  tracking-wide text-white text-sm sm:text-[20px] font-medium bg-main-red">
                Send Message
              </button>
              <button className=" px-7 py-[10px] w-[50%]  tracking-wide text-white text-sm sm:text-[20px] font-medium bg-main-red">
                Reset
              </button>
            </div>
          </div>

          {/* contact Details */}
          <div className="sm:w-[50%] px-2 sm:px-8 pt-4 pb-8 border border-main-red rounded-[20px] ">
            <div>
              <h4 className="text-[20px] font-semibold">Need Any Help?</h4>
              <H4
                title="Get in touch with us"
                className="mt-[5px] sm:mt-[24px] text-start normal-case text-main-red text-[25px] sm:text-[35px]"
              />

              <p className="text-start tracking-wider font-normal text-[1.15rem]">
                We're here to help! Reach out to us anytime, and our team will
                respond promptly.
              </p>

              <div className="mt-16 sm:pl-2 flex flex-col gap-10">
                <div className="flex gap-3 sm:gap-10 ">
                  {/* icon  */}
                  <div className="bg-main-red w-fit h-fit p-3">
                    <LiaPhoneSolid className="rotate-[270deg] text-3xl sm:text-5xl text-white" />
                  </div>
                  {/* text part  */}
                  <div className="text-sm sm:text-[20px]">
                    <h4 className=" font-medium">Have any question?</h4>
                    <p className="mt-[-5px] tracking-wider">Coming Soon!</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-10 ">
                  {/* icon  */}
                  <div className="bg-main-red w-fit h-fit p-3">
                    <IoMailOutline className=" text-3xl sm:text-5xl text-white" />
                  </div>
                  {/* text part  */}
                  <div className="text-sm sm:text-[20px]">
                    <h4 className="font-medium leading-none ">Email</h4>
                    <div className="leading-none tracking-[1px]">
                      {/* USA */}
                      <div className="flex items-center gap-2">
                        <span className="text-main-red">USA:</span>
                        <span className="tracking-wider text-black">
                          usasupport@helloatithi.com
                        </span>
                      </div>

                      {/* Europe */}
                      <div className="flex items-center gap-2">
                        <span className="text-main-red">EUROPE:</span>
                        <span className="tracking-wider text-black">
                          europesupport@helloatithi.com
                        </span>
                      </div>

                      {/* Others */}
                      <div className=" flex items-center gap-2">
                        <span className="text-main-red">OTHERS:</span>
                        <span className="tracking-wider text-black">
                          support@helloatithi.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex gap-3 sm:gap-10 ">
                  {/* icon  */}
                  <div className="bg-main-red w-fit h-fit p-3">
                    <VscMap className=" text-3xl sm:text-5xl text-white" />
                  </div>
                  {/* text part  */}
                  <div className="text-sm sm:text-xl">
                    <h4 className=" font-medium">Address</h4>
                    <p className="mt-[-5px] tracking-wider">
                      704, West Ambar Talab, Roorkee, Uttarakhand, India-2476667
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12733.840455469028!2d77.88363884109943!3d29.876475986977265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb48009555555%3A0x53191ef93ef0ff39!2sHello%20Atithi%20India%20Private%20Limited!5e0!3m2!1sen!2s!4v1731831473801!5m2!1sen!2s"
          className="w-full h-[40vh]"
        ></iframe>
      </div>
    </div>
  );
}

// 'use client'
// import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
// import Navbar from "../../../components/Navbar";
// import NavlinkBar from "../../../components/NavlinkBar";

// // image
// import lakeImage from "../../../public/images/lake-image.png";
// import Image from "next/image";
// import H4 from "../../../ui/heading/H4";

// // Set default map libraries and options
// const libraries = ["places"];
// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };
// const center = {
//   lat: 37.7749, // Example coordinates (San Francisco)
//   lng: -122.4194,
// };

// export default function ContactUs() {
//   // Load the Google Maps script
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     libraries,
//   });

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div className="font-author">
//       <Navbar />
//       <NavlinkBar />
//       <div>
//         <Image src={lakeImage} alt="Services" />
//       </div>

//       <div className="py-5">
//         {/* form and contact us details container */}
//         <div className="w-[90%] px-10 py-10 mx-auto shadow-card-red rounded-[20px] flex gap-5">
//           {/* contact form */}
//           <div className="w-[50%]">
//             <H4
//               title="Contact Us"
//               className="text-start normal-case text-main-red text-[35px]"
//             />
//             {/* Form fields */}
//           </div>

//           {/* contact details and Google Map */}
//           <div className="w-[50%] px-8 pt-4 pb-8 border border-main-red rounded-[20px]">
//             <h4 className="text-[20px] font-semibold">Our Location</h4>

//             {/* Google Map Component */}
//             <div>
//               <GoogleMap
//                 mapContainerStyle={mapContainerStyle}
//                 zoom={12}
//                 center={center}
//               >
//                 <Marker position={center} />
//               </GoogleMap>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
