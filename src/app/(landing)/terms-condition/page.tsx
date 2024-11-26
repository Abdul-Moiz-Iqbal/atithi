"use client";
import Image from "next/image";

import "./style.css";
// image
import image from "../../../../public/images/terms-condition.png";

export default function TermsCondition() {
  return (
    <div className="font-author pb-16">
 
      <div>
        <Image src={image} alt="Servies" />
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className="mt-10 mb-5 pl-2 text-[35px] font-semibold text-main-red">
          TERMS & CONDITIONS
        </h1>
        <div className="w-full border-2 border-main-red"></div>
        <div className="px-4">
          <p className="my-5 text-lg">
            These terms form a legally binding agreement between users{" "}
            <span className="font-semibold">
              (“user(s), you, your, customer(s), yourself”)
            </span>
            and{" "}
            <span className="font-semibold">
              Hello Atithi India Private Limited.
            </span>
            These terms shall govern the use of the website, mobile application,
            support team that enables the user to connect with us in relation to
            the services offered by us. Please read these terms carefully before
            accessing, using, obtaining or availing any products or services by
            us. If you do not agree with these Terms of Use you may refrain from
            using our services. These conditions must be read in conjunction
            with any other applicable terms and conditions governing the use of
            Hello Atithi and its services. Hello Atithi reserves the right to
            modify these Terms of Use at any time at its sole discretion. It
            will be your responsibility to keep yourself updated with the Terms
            of Use from time to time, your continued usage of the Services would
            be deemed to be an acceptance of these terms and the modifications
            thereto.
          </p>
          <h2 className="text-[30px] uppercase">Table of Content</h2>
          <ol className="ml-4 my-5 list-[number] text-start">
            <li>Eligibility to use</li>
            <li>Hello Atithi services</li>
            <li>Terms specifically applicable to customer </li>
            <li>Usage terms</li>
            <li>Prohibited content</li>
            <li>Communications</li>
            <li>Intellectual property</li>
            <li> Privacy</li>
            <li> Indemnification</li>
            <li> No warranty </li>
            <li>Limitation of liability</li>
            <li> Refund claim period</li>
            <li>Modification of these terms</li>
            <li>General provisions</li>
          </ol>
          <h2 className="text-[30px] uppercase">1. Eligibility to use</h2>
          <p className="my-5 text-lg">
            You must be at least eighteen (18) years of age or above and capable
            of entering, performing and adhering to these terms. While
            individuals under the age of 18 may utilize/browse the services,
            they shall do so only with the involvement, guidance and supervision
            of their parents and/or legal guardians, under such parent/legal
            guardian’s registered account. Hello Atithi reserves the right to
            terminate user’s access and refuse to provide user with access to
            the services if Hello Atithi discovers that user is under the age of
            18 years.
          </p>
          <h2 className="text-[30px] uppercase">2 Hello Atithi services</h2>
          <div className="my-5 text-lg leading-8 space-y-4">
            <p>
              Hello Atithi is primarily responsible for providing a detailed
              travel plan and advisory on every aspect of tourism-related
              services and other products, ensuring that services promised by
              Hello Atithi are delivered as expected.
            </p>

            <p>
              (a) Hello Atithi understands the needs of modern travelers and, in
              response, offers a wide variety of services on its platform to
              cater to these requirements.
            </p>

            <p>(b) You can reach out to us by:</p>

            <ul className="list-disc ml-8">
              <li>
                Writing to us at{" "}
                <a href="mailto:info@helloatithi.com" className="text-blue-600">
                  info@helloatithi.com
                </a>
              </li>
              <li>WhatsApp: +91 8630351715</li>
            </ul>

            <p>
              Our support team will work to ensure your satisfaction and
              promptly address any concerns.
            </p>
          </div>

          <h2 className="text-[30px] uppercase">
            3. Terms specifically applicable to Customer:
          </h2>
          <div className="mt-5 text-lg leading-8 space-y-4">
  <p>
    Users availing services via the platform (hereinafter referred to as “Customers”) shall be governed by the following terms and conditions:
  </p>

  <p>
    <span className="font-semibold">(a). Availing the services:</span> 
    The process of availing services from this platform may require you to disclose your personal and confidential information. To prevent any unauthorized access to such information, you should avoid using insecure devices, unprotected connections, or public computers, such as Internet-Cafés or Cyber-Cafés.
  </p>

  <p>
    Hello Atithi relies on the declarations and confirmations provided by the user in accordance with the terms, believing them to be true, and acting in good faith. Based on these, Hello Atithi agrees to provide its services as per the terms mentioned herein. By using the platform, the user agrees to:
  </p>

  <ul className="list-[lower-roman] ml-8 space-y-2">
    <li className="font-semibold">
      Entering into a valid contract:
      <div className="ml-4">
        The user must not be under any legal or other restrictions that prevent them from:
        <ul className="list-disc ml-8 mt-1 space-y-1">
          <li>Entering into a valid contract under applicable laws</li>
          <li>Making valid payment to Hello Atithi for services ordered by the user</li>
        </ul>
      </div>
    </li>

    <li className="font-semibold">Suspicious Activity:</li>
    <div className="ml-4">
      In the event of detecting any suspicious activity from the user’s account, Hello Atithi reserves the right to cancel all pending and future orders, without any liability to the user.
    </div>

    <li className="font-semibold">Credit Card Transactions:</li>
    <div className="ml-4">
      For credit card transactions, the user must use their own credit card with full authority. Hello Atithi is not liable for any fraudulent transactions. The responsibility for any fraudulent use lies solely with the user, who is required to prove otherwise.
    </div>
  </ul>
</div>


          <div className="mt-8">
            <span className="mt-5 font-semibold">(b). Payment & Usage Fee</span>{" "}
            <br />
            You hereby agree and understand that you can voluntarily pay the
            usage fee for the concerned services via the payment mode provided
            on the Hello Atithi. The user agrees and acknowledges that the
            payment procedure may call for and require additional verification
            of or information from the user and the user undertakes to provide
            complete, correct and proper information. Hello Atithi uses third
            party payment providers to receive payments from users. Hello Atithi
            is not responsible for delays or erroneous transaction execution due
            to payment issues. Hello Atithi takes utmost care to work with third
            party payment providers, but does not control their systems,
            processes, technology and work flows, hence cannot be held
            responsible for any fault at the end of payment providers. Users
            making voluntary payments for services provided by Hello Atithi,
            would be making payments to the entity mentioned as per the link
            mentioned in the tab named Voluntary Payment.
          </div>

          <div className="mt-8">
            <span className="mt-5 font-semibold"> (c). Responsibility</span>{" "}
            <br />
            You are requested to kindly take due care of all their personal
            valuables and belongings. Hello Atithi and its employees shall NOT
            be responsible for ‎any loss, theft or damage to the guests'
            personal valuables and belongings.
          </div>
          <div className="mt-8">
            <span className="mt-5 font-semibold"> (d). User Verification</span>{" "}
            <br />
            User verification on the Internet is difficult and we do not assume
            any responsibility for the confirmation of any guest’s identity.
            Notwithstanding the above, for transparency and fraud prevention
            purposes, and as permitted by applicable laws, we may, but have no
            obligation to (i) ask user to provide a form of government
            identification or other information or undertake additional checks
            designed to help verify the identities or backgrounds of guests,
            (ii) screen guests against third party databases or other sources
            and request reports from service providers, and (iii) where we have
            sufficient information to identify a guest, obtain reports from
            public records of criminal convictions or sex offender registrations
            or an equivalent version of background or registered sex offender
            checks in your local jurisdiction (if available).
          </div>

          <h2 className="mt-8 text-[30px] uppercase">4. Usage terms</h2>
          <p className="mt-5 text-lg leading-8">
            The information, materials, services available on the Hello Atithi
            may inadvertently include inaccuracies, typographical errors, or
            outdated information, Hello Atithi is not responsible for and shall
            not be bound to honor typographical or pricing errors on its
            platform. Hello Atithi reserves the right to refuse or cancel
            service at any time, including but not limited to the service that
            contain incorrect prices or product descriptions, orders in which
            Hello Atithi believes the user has violated applicable laws or these
            terms, orders that Hello Atithi believes are harmful to Hello Atithi
            or orders that Hello Atithi believes are fraudulent or based on
            illegal, fraudulent or deceitful use/furnishing of information or
            based on false information. Hello Atithi neither warrants nor makes
            any representations regarding the quality, accuracy or completeness
            of any data, information, product or Service. Due to the nature of
            the Internet, Hello Atithi cannot guarantee the continuous and
            uninterrupted availability and accessibility of the platform. Hello
            Atithi may restrict the availability of it’s platform or certain
            areas or features thereof, if this is necessary in view of capacity
            limits, the security or integrity of our servers, or to carry out
            maintenance measures that ensure the proper or improved functioning
            of the it’s platform. Hello Atithi may improve, enhance and modify
            the platform and introduce new services from time to time. No third
            party is authorized by Hello Atithi to ask for your credentials, and
            you shall not request the credentials of another user.
          </p>

          <h2 className="my-5 text-[30px] uppercase">5. Prohibited Content</h2>
          <p className="mt-5 text-lg leading-8">
            As a pre-condition of use of the platform, user warrants to Hello
            Atithi that user shall not use this platform for any purpose that is
            unlawful, unauthorized, or inconsistent with these terms, and the
            user agrees that this license to use platform will terminate
            immediately upon user's violation of this warranty. Hello Atithi
            reserves the right, at its sole discretion, to block/terminate
            user's access to this platform and its content at any time, with or
            without notice. The user agrees, acknowledges, confirms and
            undertakes that the registration data, information/data provided or
            uploaded onto the platform by the user: (a). shall not be false,
            inaccurate, misleading or incomplete; or (b). shall not be
            fraudulent or involve the use of counterfeit or stolen credit cards;
            or (c). shall not infringe any third party's intellectual property,
            trade secret or other proprietary rights or rights of publicity or
            privacy; or (d). shall not be defamatory, libelous, unlawfully
            threatening or unlawfully harassing; or (e). shall not contain any
            viruses, trojan horses, worms, time bombs, cancelbots, easter eggs
            or other computer programming routines or executable files that may
            damage, detrimentally interfere with, surreptitiously intercept or
            expropriate any system, data or personal information of any person
            whatsoever; If the user contravenes the foregoing or Hello Atithi
            has reasonable grounds to suspect that the user has contravened the
            foregoing, Hello Atithi has the right to indefinitely deny or
            terminate user's access to the platform and to refuse to honor the
            user's request(s) The Users are prohibited from engaging in the
            following activities:
          </p>
          <ol className="alpha-list">
            <li>
              {" "}
              Systematically retrieve data or other content from the platform to
              create or compile, directly or indirectly, a collection,
              compilation, database, or directory without written permission
              from us.
            </li>
            <li>
              Make any unauthorized use of the platform, including collecting
              usernames and/or email addresses of users by electronic or other
              means for the purpose of sending unsolicited email, or creating
              user accounts by automated means or under false pretenses.
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related
              features of the platform, including features that prevent or
              restrict the use or copying of any Content or enforce limitations
              on the use of the platform and/or the Content contained therein.
            </li>
            <li>
              Engage in unauthorized framing of or linking to the platform.
            </li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any
              attempt to learn sensitive account information such as user
              passwords.
            </li>

            <li>
              Make improper use of our support services or submit false reports
              of abuse or misconduct.{" "}
            </li>
            <li>
              {" "}
              Engage in any automated use of the system, such as using scripts
              to send comments or messages, or using any data mining, robots, or
              similar data gathering and extraction tools.
            </li>
            <li>
              Interfere with, disrupt, or create an undue burden on the platform
              or the networks or services connected to the platform.
            </li>
            <li>
              Attempt to impersonate another user or person or use the username
              of another user.
            </li>
            <li>Sell or otherwise transfer your profile. </li>
            <li>
              Use any information obtained from the platform in order to harass,
              abuse, or harm another person. l. Use the platform as part of any
              effort to compete with us or otherwise use the platform and/or the
              Content for any revenue-generating endeavor or commercial
              enterprise.
            </li>
            <li>
              {" "}
              Decipher, decompile, disassemble, or reverse engineer any of the
              software comprising or in any way making up a part of the
              platform.
            </li>
            <li>
              Attempt to bypass any measures of the platform designed to prevent
              or restrict access to the platform, or any portion of the
              platform.
            </li>
            <li>
              {" "}
              Copy or adapt the platform’s software, including but not limited
              to Flash, PHP, HTML, JavaScript, or other code.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) viruses,
              Trojan horses, or other material, including excessive use of
              capital letters and spamming (continuous posting of repetitive
              text), that interferes with any party’s uninterrupted use and
              enjoyment of the platform or modifies, impairs, disrupts, alters,
              or interferes with the use, features, functions, operation, or
              maintenance of the platform.{" "}
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) any
              material that acts as a passive or active information collection
              or transmission mechanism.
            </li>
            <li>
              Except as may be the result of standard search engine or Internet
              browser usage, use, launch, develop, or distribute any automated
              system, including without limitation, any spider, robot, cheat
              utility, scraper, or offline reader that accesses the platform, or
              using or launching any unauthorized script or other software.
            </li>
            <li>
              Disparage, tarnish, or otherwise harm, in our opinion, us and/or
              the platform.
            </li>
            <li>
              Use the platform in a manner inconsistent with any applicable laws
              or regulations.
            </li>
          </ol>
          <h2 className="my-5 text-[30px] uppercase">6. Communications</h2>
          <p className="mt-5 text-lg leading-8">
            When you use the platform, you agree and understand that you are
            communicating with Hello Atithi through electronic records and you
            consent to receive communications via electronic records from Hello
            Atithi periodically and as and when required. Hello Atithi may
            communicate with you by email or by other mode of communication,
            electronic or otherwise. You specifically agree that Hello Atithi
            shall not be responsible for unauthorized access to or alteration of
            your transmissions or data, any material or data sent or received or
            not sent or received. Further, Hello Atithi will make best efforts
            to safeguard the confidentiality of your personally identifiable
            information available with it, but transmissions made by means of
            the internet cannot be guaranteed or made absolutely secure. By
            using this platform, you agree that Hello Atithi shall not be liable
            for disclosure of your information due to errors in transmission or
            unauthorized acts of third parties. Without prejudice to the
            foregoing you agree that Hello Atithi shall not be held liable or
            responsible for 'phishing attacks' on you. You may accept or decline
            the cookies when you access the platform. It is the user’s
            responsibility to set his browser to alert him to accept or to
            reject cookies.
          </p>
          <h2 className="my-5 text-[30px] uppercase">
            7. Intellectual Property
          </h2>
          <p className="mt-5 text-lg leading-8">
            Platform and the content posted herein which shall include but shall
            not be limited to pictures, branding, text, graphics, designs, brand
            logos, audio, video, interfaces and /or any other information, or
            the overall arrangement of content is protected and is owned,
            controlled or licensed by or to Hello Atithi; all comments,
            feedback, ideas, suggestions, information or any other content
            provided by the user. You may not modify, publish, copy, transmit,
            transfer, sell, reproduce, modify, create derivative works from,
            license, distribute, frame, hyperlink, download, repost, perform,
            translate, mirror, display or commercially exploit Hello Atithi IP
            in any other way. The user agrees that any feedback, comments,
            ideas, suggestions, information, or any other content which user
            contributes to Hello Atithi or it’s platform (including the name you
            submit with any content) will be deemed to include a royalty-free,
            perpetual, irrevocable, nonexclusive right and license for Hello
            Atithi to adopt, publish, reproduce, disseminate, transmit,
            distribute, copy, use, create derivative works from, display
            worldwide, or act on such content without additional approval or
            consideration in any form, media, or technology now known or later
            developed for the full term of any rights that may exist in such
            content, and you waive any claim to the contrary. The user
            represents and warrants that user owns or otherwise controls all of
            the rights to the content that he/she may contribute to this
            platform and that use of his/her content by Hello Atithi shall not
            infringe upon or violate the rights of any third party.
          </p>

          <h2 className="my-5 text-[30px] uppercase">8. Privacy</h2>
          <p className="mt-5 text-lg leading-8">
            Please refer the privacy policy which will also govern your use of
            Hello Atithi’s platform and/or services which can be accessed here:
            https://www.helloatithi.com/privacy-policy/
          </p>
          <h2 className="my-5 text-[30px] uppercase">9. Indemnification</h2>
          <p className="mt-5 text-lg leading-8">
            Without prejudice to and in addition to any other remedies, reliefs
            or legal resources available to Hello Atithi herein or any
            applicable laws or otherwise, user agrees to indemnify, defend and
            hold Hello Atithi harmless including but not limited to its
            affiliate, agents and employees from and against any and all losses,
            liabilities, claims, damages, demands, costs and expenses (including
            legal fees and disbursements in connection therewith and interest
            chargeable thereon) asserted against or incurred by Hello Atithi
            that arise out of or related to your use or misuse of the of the
            website, any violation by you of these terms and conditions, or any
            breach of representations, warranties and covenants made by you
            herein.
          </p>
          <h2 className="my-5 text-[30px] uppercase">10. No warranty</h2>
          <p className="mt-5 text-lg leading-8">
            The services are provided by Hello Atithi on an "as is" basis
            without warranty of any kind, express, implied, statutory or
            otherwise, including the implied warranties of title,
            non-infringement, merchantability or fitness for a particular
            purpose. Without limiting the foregoing, Hello Atithi makes no
            warranty that (i) Hello Atithi platform or the services will meet
            your requirements or your use of the Hello Atithi platform or will
            be uninterrupted, timely, secure or error-free; (ii) the results
            that may be obtained from the use of the Hello Atithi platform, or
            services will be effective, accurate or reliable; (iii) the quality
            of the Hello Atithi platform, or services will meet your
            expectations; or that (iv) any errors or defects in the Hello Atithi
            platform or services will be corrected. No advice or information,
            whether oral or written, obtained by you from Hello Atithi or
            through or from use of the Hello Atithi platform shall create any
            warranty not expressly stated in the terms of use. Hello Atithi
            shall have no liability to the user for any interruption or delay,
            to access the Hello Atithi platform irrespective of the cause. It is
            hereby further clarified that Hello Atithi and Channel Partners (If
            user asked for their services) are separate and independent entities
            and Hello Atithi does not work as representative or agent of the
            Channel Partner. Hello Atithi will be the first point of contact in
            respect of online payment dispute management, refunds,
            cancellations, returns and customer support as they relate to the
            use of Hello Atithi services. users can reach out to Hello Atithi to
            mediate or resolve any online payment dispute or disagreement
            between user and Channel Partners. Hello Atithi shall not be made a
            party to any dispute between the user(s) and Channel Partner(s),
            except in disputes relating to Hello Atithi services as mentioned
            above.
          </p>
          <h2 className="my-5 text-[30px] uppercase">
            11. Limitation of Liability
          </h2>
          <p className="mt-5 text-lg leading-8">
            Hello Atithi shall not be liable for any damages of any kind
            whatsoever including but not limited to direct, indirect,
            incidental, punitive, exemplary and consequential damages, damages
            for loss of use, data or profits, or other intangible losses, which
            may arise or are arising from the use of this Hello Atithi platform
            or any of the information, software, services and related graphics
            contained within the Hello Atithi platform or any of the services
            offered, regardless of whether such damages are based on contract,
            tort, negligence, strict liability or otherwise, and even if Hello
            Atithi has been advised of the possibility of damages.
            NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN OR
            ELSEWHERE, HELLO ATITHI’'S ENTIRE LIABILITY TO THE USER FOR ANY
            CLAIM ARISING OUT OF AVAILING Hello Atithi SERVICES/ BROWSING THE
            Hello Atithi PLATFORM SHALL BE LIMITED TO THE AMOUNT EQUIVALENT TO
            THE PRICE PAID FOR THE PRODUCT AND SERVICES GIVING RISE TO SUCH
            CLAIM. You hereby waive any and all claims, causes of action, or the
            rights to bring such claims or causes of action, arising out of or
            related to the site, communication, or these terms and conditions
            after six (6) months from the first occurrence of the kind of act,
            event, condition, or omission upon which the claim or cause of
            action is based.
          </p>
          <h2 className="my-5 text-[30px] uppercase">
            12. Refund Claim Period
          </h2>
          <p className="mt-5 text-lg leading-8">
            Without prejudice to and in addition to any other remedies, reliefs
            If you wish to claim a refund, you have an option to raise the
            request within 7 days from your payment date.
          </p>
          <h2 className="my-5 text-[30px] uppercase">
            13. Modification of these Terms
          </h2>
          <p className="mt-5 text-lg leading-8">
            Hello Atithi reserves the right to modify these Terms at any time in
            accordance with this provision.
          </p>
          <h2 className="my-5 text-[30px] uppercase">14. General Provisions</h2>

          <div className="mt-5 text-lg leading-8">
            <span className="font-medium">Governing Law and Jurisdiction:</span>
            This Agreement, and all transactions entered into on or through
            Hello Atithi platform shall be interpreted, construed and governed
            by the laws of India which shall be applicable to this Agreement
            without regard to principles of conflict of laws. user agrees that
            all claims, differences and disputes arising under or in connection
            with or in relation thereto the Hello Atithi platform, the terms or
            any transactions entered into on or through the Hello Atithi
            Platform or the relationship between user and Hello Atithi shall be
            subject to the exclusive jurisdiction of the courts at Roorkee and
            user hereby accede to and accept the jurisdiction of such courts.
          </div>
          <div className="mt-5 text-lg leading-8">
            <span className="font-medium">No Waiver:</span>
            Any failure, delay or forbearance on the part of Hello Atithi in:
            (i) exercising any right, power or privilege under this agreement;
            or (ii) enforcing terms of this agreement, shall not operate as a
            waiver thereof, nor shall any single or partial exercise by Hello
            Atithi of any right, power or privilege preclude any other future
            exercise or enforcement thereof.
          </div>
          <div className="mt-5 text-lg leading-8">
            <span className="font-medium">Severability:</span>
            The Parties hereto agree that each of the provisions contained in
            this agreement shall be severable, and the unenforceability of one
            or more provisions of this agreement shall not affect the
            enforceability of any other provision(s) or of the remainder of this
            agreement. For more information, Mail us info@helloatithi.com
          </div>
        </div>
      </div>

    </div>
  );
}
