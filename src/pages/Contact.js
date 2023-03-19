import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.4 }}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>61 rue des boissieres</p>
              <p>16000, Angouleme</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0652413488" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("numéro de téléphone copié.")}
                >
                  06 52 41 34 88
                </p>
              </CopyToClipboard>
            </div>
          </div>

          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard
                text="titou.hellegouarch@gmail.com"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("mail copié.")}
                >
                  titou.hellegouarch@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="credits">
            <p>© From Titouan Hellégouarch - CTO de nightbrand</p>
          </div>
        </div>
        <Buttons left={"/projet-7"} />
      </motion.div>
    </main>
  );
};

export default Contact;
