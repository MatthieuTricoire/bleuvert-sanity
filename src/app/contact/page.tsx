import React from "react";
import ContactForm from "./components/contact-form";

const ContactPage = () => {
  return (
    <div className=" w-full h-full flex-1">
      <section className=" w-full flex flex-col  gap-10">
        <h1 className="text-center mt-8 md:mt-10 text-3xl md:text-5xl font-[500]">
          Nous contacter
        </h1>
        <ContactForm />
      </section>

      <section className="mt-10 flex flex-col gap-4">
        <h2 className="text-center text-3xl md:text-3xl font-[500]">
          Où nous trouver ?
        </h2>

        <div className="text-center mt-4">
          <div>Studio bleuvert</div>
          <div>17 Rue des Cordeliers, 64000 Pau</div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8522775431106!2d-0.37391872384197733!3d43.29641517112132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5648d3bef5868d%3A0xda4ea40c29177b21!2s17%20Rue%20des%20Cordeliers%2C%2064000%20Pau%2C%20France!5e0!3m2!1sfr!2suk!4v1712746483486!5m2!1sfr!2suk"
          height="450"
          style={{ border: 0 }}
          className="w-full md:max-w-3xl mx-auto rounded-lg"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default ContactPage;
