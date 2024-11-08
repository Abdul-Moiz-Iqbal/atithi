"use client";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import NavlinkBar from "../../../components/NavlinkBar";

// image
import image from "../../../public/images/privacy-policy-image.png";
import Footer from "../../../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="font-author">
      <Navbar />
      <NavlinkBar />
      <div>
        <Image src={image} alt="Servies" />
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className="mt-10 mb-5 pl-2 text-[35px] font-semibold text-main-red">
          Privacy Policy
        </h1>
        <div className="w-full border-2 border-main-red"></div>
        <div className="px-4">
          <p className="my-5 text-lg">
            HELLO ATITHI is committed to protecting your information. This
            privacy notice provides details about the information we collect
            about you and how we protect it. It also explains your rights and
            how to contact us if you have questions about how we use your
            information.
          </p>
          <h2 className="text-[30px] uppercase">
            Information about HELLO ATITHI
          </h2>
          <p className="my-5 text-lg">
            In this privacy notice, references to “Hello Atithi”, "we" or "us"
            or “our” are to Hello Atithi India Private Limited (a company
            incorporated under the laws of INDIA). Depending on where and how
            you interact with us (e.g. by using our app or website) and how
            Hello Atithi will process your information.
          </p>
          <h2 className="text-[30px] uppercase">Marketing and Preferences</h2>
          <p className="my-5 text-lg">
            We do not use your personal information to send you marketing
            messages by post, telephone, social media platforms, email, SMS.
          </p>
          <h2 className="text-[30px] uppercase">Scope of our privacy notice</h2>
          <p className="my-5 text-lg leading-8">
            This notice applies to anyone who interacts with us in relation to
            our products and services (“you”, “your''), via any channel (e.g.
            app, website, email, phone. We may give you additional privacy
            notices if required for specific interactions. This privacy notice
            applies to individuals who enquire about, purchase or make use of
            our products and services, such as requests on-demand services,
            contacts customer support or otherwise communicates or interacts
            with Hello Atithi. It describes how we handle your information,
            regardless of the way you contact us (e.g. app, website, email,
            phone). Sometimes we will provide you with additional information or
            notices, depending on the way we interact with each other, e.g. if
            you use particular functionality on our app or website, we may
            explain how that functionality uses your information. Hello Atithi’s
            website and app is not aimed at children, and we do not allow
            children to use our services without a responsible adult. This
            privacy notice is therefore not aimed at children. If you provide us
            with information about your children, it is processed as described
            in this notice.
          </p>
          <h2 className="text-[30px] uppercase">
            Ways in which we obtain personal information
          </h2>
          <p className="mt-5 text-lg leading-8">
            We obtain personal information from you through your interactions
            with us, including by telephone (please note that we record or
            monitor our chats for compliance and quality assurance purposes), by
            email, via our websites, via our apps, via post, via, social media
            or face to face.<br></br> We also obtain your personal information
            from third parties (If user asked for third parties services) such
            as:
          </p>
          <ol className="px-4 list-[lower-alpha] " type="a">
            <li> Others who book accommodation for you</li>
            <li> Accommodation providers</li>
            <li>
              Service providers who work with us in relation to our product or
              service
            </li>
          </ol>
          <h2 className="text-[30px] uppercase">
            Categories of personal information
          </h2>
          <p className="mt-5 text-lg leading-8">
            We process two categories of personal information about you and/or,
            where applicable, others whom you have booked accommodation for,
            namely:
          </p>
          <ol className="px-4 list-[lower-alpha] " type="a">
            <li>
              {" "}
              Standard personal information (e.g. information we use to contact
              you, identify you or manage our relationship with you) and
            </li>
            <li>
              {" "}
              Special categories of information (e.g. if you have chosen to let
              us know that you have a medical condition requiring special
              accommodations).
            </li>
            <li>Standard personal information includes</li>
          </ol>
          <p className="mt-5 text-lg leading-8">
            <span className="font-medium">
              Usage and Preference Information:
            </span>{" "}
            We collect information about how you interact with our website, app
            or other Services, including IP addresses, search terms and
            parameters and device information.<br></br>{" "}
            <span className="font-medium">Log Information:</span> We collect
            server logs, which may include information like device IP address,
            access dates and times, app features or pages viewed, app crashes
            and other system activity, type of browser, and the third-party site
            or service you were using before interacting with our Services.
            <br></br>
            <span className="font-medium">Device Information:</span>
            We collect information about your mobile device to help us
            understand how our app is performing across a range of devices and
            to help us identify the cause of “crashes” and potential performance
            improvements.<br></br>{" "}
            <span className="font-medium">Call and SMS Data:</span> We make it
            easier for you to contact accommodation managers. In connection with
            this, we receive call data, including the date and time of the call
            or SMS message, the parties’ phone numbers, and the content of the
            SMS message. Sometimes you may choose to give us special category
            information about you or others which may attract extra protections
            under data protection laws.<br></br>{" "}
            <span className="font-medium"> For example:</span> Information about
            health may be revealed by special requests for assistance or
            disability-friendly accommodation or if you require medical
            assistance during your stay.
          </p>
          <h2 className="my-5 text-[30px] uppercase">
            Purposes and lawful grounds of our processing personal information
          </h2>
          <p className="mt-5 text-lg leading-8">
            We process your personal information for the purposes set out in
            this notice, based on the legal grounds. Different legal grounds
            apply depending on what category of personal information we process.
            Standard personal information is normally processed by us on the
            basis that it is necessary for the performance of a contract, our or
            a third parties’ legitimate interests or law. Further information
            about this and special category processing grounds is set out below.
            <br></br>
            We process standard personal information about you on the basis that
            it is:<br></br>{" "}
            <span className=" font-medium">
              Necessary for the performance of a contract:
            </span>{" "}
            where we have a contract with you, we will process your personal
            information in order to fulfill that contract (i.e. if you opt in
            for on). <br></br>We process special category information because:
          </p>
          <ol className="px-4 list-[lower-alpha] leading-8 " type="a">
            <li>
              <span className="font-medium">
                Processing is necessary for reasons of substantial public
                interest, on the basis of law:
              </span>
              for example, if you are taken ill or have an accident at your
              accommodation, we may have to keep a record of the incident for
              health and safety purposes
            </li>
            <li>
              <span className="font-medium">We have your consent:</span>
              we would ask for any consent to process your special category data
              separately (your consent is not assumed simply because you have
              read this privacy notice).
            </li>
            <li>
              <span className="font-medium">
                {" "}
                Processing is necessary for the establishment, exercise or
                defense of a legal claim
              </span>
            </li>
          </ol>
          <h2 className="my-5 text-[30px] uppercase">
            Analytics and Advertising Services Provided by Others
          </h2>
          <p className="mt-5 text-lg leading-8">
            We also use Google Place API to make suggestions based on your
            location or search strings. Hello Atithi is using Google Place API
            for place prediction. Please refer to their privacy policy.
            http://www.google.com/privacy.html
          </p>
          <h2 className="my-5 text-[30px] uppercase">
            Sharing your information
          </h2>
          <p className="mt-5 text-lg leading-8">
            We share your information within the HELLO ATITHI and with others
            who help us provide services to you (e.g. your accommodation
            provider). We also share your information in accordance with the
            law. For more information on who we share your information with, We
            share your information for the purposes set out in this privacy
            policy, with the following categories of recipients:
          </p>
          <ol className="px-4 list-[lower-alpha] leading-8" type="a">
            <li>Other members of the HELLO ATITHI.</li>
            <li>
              With accommodation managers to enable them to provide the services
              you request, e.g. we share your name and expected check-in time.
            </li>
            <li>
              Third party suppliers who help deliver products or services on our
              behalf, or who have partnered with HELLO ATITHI in connection with
              services, as well as other apps or websites that integrate with
              our API or Services, or those with an API or Service with which we
              integrate
            </li>
            <li>Your contact if you use a referral feature.</li>
            <li>
              The general public, if you submit content in a public forum, such
              as blog comments, social media posts, or other features of our
              services that are obviously viewable by the general public. For
              example, you may choose to use social sharing features and related
              tools which let you share your Stay experience with other apps,
              sites, or media, and vice versa. Your use of these features
              enables the sharing of information with your friends or the
              public, depending on your social sharing service settings.
            </li>
            <li>
              Third parties where we have a duty to or are permitted to disclose
              your personal information by law (e.g. law enforcement officials,
              government authorities).
            </li>
            <li>
              With the police in the exercise of their functions or with others
              as required by a court order. Appropriate protections will be in
              place to protect your personal information as required by data
              protection laws.
            </li>
          </ol>
          <h2 className="my-5 text-[30px] uppercase">Retention period</h2>
          <p className="mt-5 text-lg leading-8">
            We retain your personal information in accordance with Hello
            Atithi’s records retention policies. However, there may be
            circumstances that mean we must retain your personal information for
            longer.
          </p>
          <h2 className="my-5 text-[30px] uppercase">Your Rights</h2>
          <p className="mt-5 text-lg leading-8">
            Data protection laws in the EEA and some other countries provide
            individuals with rights in relation to the information that HELLO
            ATITHI holds about them on some computer and paper records. These
            include rights to access, correct, delete, restrict the use of,
            object to the use of, port to another person, and withdraw consent
            to the use of your information. Exceptions may apply to these
            rights. The data protection laws in the EEA and in some other
            countries provide individuals with the following rights:
          </p>
          <ol className="px-4 list-[lower-alpha] leading-8" type="a">
            
            <li>
              . Right of subject access: The right to make a written request for
              details of personal information we hold about you and to request a
              copy of that personal information.
            </li>
            <li>
              . Right to rectification: The right to have inaccurate information
              about you rectified.
            </li>
            <li>
              {" "}
              Right to restriction of processing: The right to request that your
              personal information is only used for restricted purposes.
            </li>
            <li>
              Right to data portability: The right to ask for personal
              information you have made available to us to be transferred to you
              or a third party in machine-readable formats.
            </li>
            <li>
              Right to data portability: The right to ask for personal
              information you have made available to us to be transferred to you
              or a third party in machine-readable formats.
            </li>
            <li>
              . Right to withdraw consent: We do not normally rely on consent as
              a basis for processing your personal information. We will only ask
              for your consent in very limited circumstances and, if we do so,
              will make it obvious to you when we are asking for that consent
              and what that is for. You have the right to withdraw any consent
              you have given us to handle your personal information. If you
              withdraw your consent, this will not affect the lawfulness of use
              of your personal information prior to the withdrawal of your
              consent. These rights may not apply in all cases. If we do not
              comply with your request, we will explain why. In response to a
              request, we will ask you to verify your identity if we need to,
              and to provide information that helps us to understand your
              request better. Note If you have any questions, comments,
              complaints or suggestions in relation to this notice, or any other
              concerns about the way in which we process information about you,
              please contact our Privacy Team at info@helloatithi.com
            </li>
          </ol>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
