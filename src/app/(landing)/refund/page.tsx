"use client";
import Image from "next/image";

// image
import lakeImage from "../../../../public/images/terms-condition.png";
import mobileImage from "../../../../public/images/mobile-blog.png";

import Link from "next/link";
import Button from "../../../../ui/Button/Button";

export default function Refund() {
  return (
    <div className="font-author">
      <div className="">
        <Image src={lakeImage} alt="Servies" className="hidden sm:block" />
        <Image src={mobileImage} alt="Servies" className="sm:hidden" />
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className="mt-10 mb-5 pl-2 text-xl sm:text-[35px] font-semibold text-main-red">
          PAYMENT TERMS, CANCELLATION AND REFUND
        </h1>
        <div className="w-full border-2 border-main-red"></div>
        <div className="px-4">
          <p className="my-5 text-base">
            At Hello Atithi, the goal is to ensure a smooth and transparent
            experience for all travellers. To achieve this, the following
            payment terms and refund policy have been designed to clearly
            outline the procedures for using Hello Atithi services, whether
            users choose to pay online or upon arrival in India. This explains
            the available payment methods, the responsibilities for certain
            services like Local SIM recharges, and the conditions under which
            refunds are provided.
          </p>
          <h2 className="text-xl sm:text-[30px] uppercase">1. Service Fees</h2>
          <p className="my-5 text-base sm:text-lg">
            All services, including Visa Assist, TripShield, RupeePay,
            TrueGuide, Local SIM, StreetSpeak, and 24/7 support, are available
            under a subscription model. Payment must be completed before
            services are activated.
          </p>
          <h2 className="text-xl sm:text-[30px] uppercase">2. Payment Methods</h2>
          <p className="my-5 text-lg"></p>
          <ul>
            <li>
              {" "}
              Pay Upon Arrival: Users can submit details and make payment in
              Indian Rupees (INR) upon their arrival in India. Payment is
              required before any services are accessed. For "Pay Upon Arrival"
              payments, you can also pay through local online payment mode like
              via scanning a QR or online bank transfer from your “RuppeePay”
              local Indian bank account.
            </li>
            <li>
              Online Payment: Users can submit details and pay online via PayPal
              prior to arriving in India. The payment will be processed in USD,
              with any applicable currency conversion fees borne by the user.
            </li>
          </ul>
          <p className="my-5 text-2xl ">
            The “Pay Upon Arrival” payment method
          </p>
          <p className="my-5 text-lg">
            {" "}
            The “Pay on Arrival” can be processed on the following bank account,
            when you arrive in India:
          </p>
          <p className="my-5 text-lg">M/S HELLO ATITHI INDIA PRIVATE LIMITED</p>
          <p className="my-5 text-lg">Bank Name - HDFC BANK LTD</p>
          <p className="my-5 text-lg">Account N. - 50200046753708</p>
          <p className="my-5 text-lg">Branch Name - ROORKEE</p>
          <p className="my-5 text-lg">
            Branch Address - 1410 CHOW MANDI, MALVIYA CHOWK, ROORKEE, DIST.
            HARIDWAR, UTTARAKHAND-247667
          </p>
          <p className="my-5 text-lg">RTGS/NEFT IFSC - HDFC0000657 </p>
          <p className="my-5 text-lg">MICR - 247240667</p>
          <p className="my-5 text-lg">Branch Code - 657</p>

          <h2 className="text-[30px] uppercase">3. Local SIM</h2>
          <p className="my-5 text-lg">
            The local SIM provided by Hello Atithi will need to be recharged by
            users based on their personal usage and requirements. Hello Atithi
            will facilitate the SIM but will not handle recharges or additional
            balance requirements.
          </p>

          <h2 className="text-[30px] uppercase">4. Payment Confirmation</h2>
          <ul>
            <li>
              Pay Upon Arrival: Users will receive a confirmation of payment via
              email or message in India.
            </li>
            <li>
              Online Payment: A confirmation email will be sent upon successful
              online payment.
            </li>
          </ul>

          <h2 className="mt-8 text-[30px] uppercase">5. Late Payments</h2>
          <p className="mt-5 text-lg leading-8">
            Online payments are secured via trusted platforms like PayPal. For
            "Pay Upon Arrival" payments, your online payments are secured by
            Local banks and NPCI.
          </p>

          <h1 className="mt-10 text-3xl font-medium">Refund Policy</h1>

          <h2 className="my-5 text-[30px] uppercase">
            1. No Refunds for Services Rendered
          </h2>
          <p className="mt-5 text-lg leading-8">
            Once services like Visa Assist, RupeePay, or Local SIM are
            activated, they are non-refundable. For the local SIM, recharges
            made independently by the user are not the responsibility of Hello
            Atithi and are non-refundable.
          </p>

          <h2 className="my-5 text-[30px] uppercase">
            2. Cancellations and Refunds Before Service Activation
          </h2>
          <p className="mt-5 text-lg leading-8">
            Full refunds are available for cancellations made within 48 hours of
            payment, provided no services have been activated. This applies only
            to online payments.
          </p>
          <h2 className="my-5 text-[30px] uppercase">3. Partial Refunds</h2>
          <p className="mt-5 text-lg leading-8">
            In case of non-delivery of services due to unforeseen circumstances,
            a partial refund may be issued based on services not rendered.
          </p>

          <h2 className="my-5 text-[30px] uppercase">4. Processing Time</h2>
          <p className="mt-5 text-lg leading-8">
            Refunds, where applicable, will be processed within 7-10 business
            days and will be credited to the original payment method.
          </p>
          <h2 className="my-5 text-[30px] uppercase">5. Dispute Resolution</h2>
          <p className="mt-5 text-lg leading-8">
            Any issues or disputes regarding payments and refunds can be
            addressed to Hello Atithi support at refundsupport@helloatithi.com
          </p>
          <h2 className="my-5 text-[30px] uppercase">
            6. Policy Modifications
          </h2>
          <p className="mt-5 text-lg leading-8">
            Hello Atithi reserves the right to modify its payment and refund
            terms at any time, with prior notice to customers.
          </p>

          <p className="mt-10">
            For more information, Mail us payment@helloatithi.com
          </p>
          <div className="flex justify-center">
            <Link href={"/trip-form"} className="">
              <Button
                text="START MY SAFE JOURNEY"
                className="w-fit tracking-wider  my-8  font-semibold shadow-none"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
