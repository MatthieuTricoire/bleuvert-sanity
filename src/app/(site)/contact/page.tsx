import React from "react";
import ContactForm from "./components/contact-form";
import { Instagram } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className=" w-full h-full flex-1">
      <section className=" w-full flex flex-col  gap-10">
        <h1 className="text-center mt-8 md:mt-24 text-3xl md:text-5xl font-[500]">
          Nous contacter
        </h1>
        <ContactForm />
      </section>

      <section className="mt-10 flex flex-col gap-4">
        <h2 className="text-center text-3xl md:text-3xl font-[500]">
          Où nous trouver ?
        </h2>

        <Link href={"https://www.instagram.com/studio_bleuvert/"}><Instagram className="mx-auto size-10 text-primary  " /></Link>
        <div className="text-center mt-4">
          <div>Studio bleuvert</div>
          <div>17 Rue des Cordeliers, 64000 Pau</div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8522761640343!2d-0.37134380000000006!3d43.2964152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5649cd92dede99%3A0x7f5957147a5ccd58!2sstudio%20bleuvert!5e0!3m2!1sfr!2sfr!4v1721228852755!5m2!1sfr!2sfr"
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
