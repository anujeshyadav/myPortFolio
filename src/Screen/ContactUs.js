import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

export const ContactUs = () => {
  useEffect(() => {
    // console.log(window);
  }, []);
  return (
    <div>
      <Container>
        <div className="mycontactusrform>">
          <div className="">
            <div className="d-flex justify-content-center py-2">
              <h2> Contact me</h2>
            </div>
            <p style={{ fontSize: "18px" }}>
              I would love to hear from you! Whether you have a project in mind,
              a question, or just want to say hello, feel free to reach out
              using any of the following methods:
            </p>
            <div className="py-2">
              <span style={{ fontWeight: "500", fontSize: "20px" }}>
                {" "}
                Email:
              </span>{" "}
              <span> sanujeshyadav@gmail.com </span>
            </div>
            <div className="py-2">
              <span style={{ fontWeight: "500", fontSize: "20px" }}>
                {" "}
                Phone:
              </span>{" "}
              <span> +9170004-20819</span>
            </div>
            <div className="py-2">
              <span style={{ fontWeight: "500", fontSize: "20px" }}>
                {" "}
                Social Media:
              </span>{" "}
              <p>
                Connect with me on LinkedIn for professional networking and
                updates.{" "}
              </p>
            </div>
            <p className="py-1">
              Alternatively, you can use the contact form below to send me a
              message directly. Please provide your name, email address, and a
              brief description of your inquiry, and I will get back to you
              within 24 hours.{" "}
              <a target="_blank" href="https://forms.gle/gvBbyPVpEKKuAJeX9">
                <b> Contact Now</b>
              </a>{" "}
            </p>
            <div className="py-2">
              <span style={{ fontWeight: "500", fontSize: "20px" }}>
                {" "}
                Availability:
              </span>{" "}
              <p>
                I am generally available during regular business hours (9 AM - 6
                PM, Monday to Friday, GMT IST).
              </p>
            </div>
            <small>
              {" "}
              Please note that response times may vary depending on the volume
              of inquiries, but I strive to respond promptly to all messages.
            </small>{" "}
            <div className="py-2">
              <span style={{ fontWeight: "500", fontSize: "20px" }}>
                {" "}
                Data Privacy:
              </span>{" "}
              <p className="py-1">
                Your privacy is important to me. Any information shared through
                this website or during our communication will be treated
                confidentially and used solely for the purpose of our
                interaction. I adhere to applicable data protection regulations
                and will not disclose your information to third parties without
                your consent. Thank you for your interest, and I look forward to
                connecting with you soon!
              </p>
            </div>
            <h3> Best Regards,</h3>
            <h6>ANUJESH YADAV</h6>
            <p>React Developer</p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="mt-3">
              <h5 className="py-2">
                {" "}
                Want to Give feedBack click on{" "}
                <a target="_blank" href="https://forms.gle/gvBbyPVpEKKuAJeX9">
                  Click It
                </a>
              </h5>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <h4>Also You Can Contact me on Below Social Media Platform</h4>
          </div>
        </div>
      </Container>
    </div>
  );
};
