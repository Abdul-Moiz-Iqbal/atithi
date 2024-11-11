"use client";
import Image from "next/image";


// image
import lakeImage from "../../../public/images/lake-image.png";
import H4 from "../../../ui/heading/H4";


// react icons
import { LiaPhoneSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import { VscMap } from "react-icons/vsc";

// Set default map libraries and options



export default function ContactUs() {
 
  return (
    <div className="font-author">
     
      <div>
        <Image src={lakeImage} alt="Servies" />
      </div>

      <div className="py-5 ">
        {/* form and contact us details contianer  */}
        <div className="w-[90%] px-10 py-10 mx-auto shadow-card-red rounded-[20px] flex flex-col gap-5 ">
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
                Resend Message
              </button>
            </div>
          </div>

          {/* contact Details */}
          <div className="sm:w-[50%] px-8 pt-4 pb-8 border border-main-red rounded-[20px] ">
            <div>
              <h4 className="text-[20px] font-semibold">Need Any Help?</h4>
              <H4
                title="Get in touch with us"
                className="mt-0 text-start normal-case text-main-red text-[35px]"
              />

              <p className="text-start tracking-wider font-normal text-[1.15rem]">
                We're here to help! Reach out to us anytime, and our team will
                respond promptly.
              </p>

              <div className="mt-16 pl-2 flex flex-col gap-10">
                <div className="flex gap-10 ">
                  {/* icon  */}
                  <div className="bg-main-red w-fit p-3">
                    <LiaPhoneSolid className="rotate-[270deg] text-5xl text-white" />
                  </div>
                  {/* text part  */}
                  <div className="text-[20px]">
                    <h4 className=" font-medium">Have any question?</h4>
                    <p className="mt-[-5px] tracking-wider">Coming Soon!</p>
                  </div>
                </div>
                <div className="flex gap-10 ">
                  {/* icon  */}
                  <div className="bg-main-red w-fit p-3">
                    <IoMailOutline className=" text-5xl text-white" />
                  </div>
                  {/* text part  */}
                  <div className="text-[20px]">
                    <h4 className=" font-medium">Have any question?</h4>
                    <p className="mt-[-5px] tracking-wider">Coming Soon!</p>
                  </div>
                </div>
                <div className="flex gap-10 ">
                  {/* icon  */}
                  <div className="bg-main-red w-fit p-3">
                    <VscMap className=" text-5xl text-white" />
                  </div>
                  {/* text part  */}
                  <div className="text-[20px]">
                    <h4 className=" font-medium">Have any question?</h4>
                    <p className="mt-[-5px] tracking-wider">Coming Soon!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
     
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
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
