"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "0dc72a53-2d7f-48a4-b91d-6d6a4499110c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setIsSubmitting(false);

    if (data.success) {
      toast.success("Ok");
      event.target.reset();
    } else {
      console.log("Error", data);

      toast.error("Quelque chose s'est mal passé. Merci de réessayer.");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-xs md:max-w-2xl  gap-4 grid grid-cols-1 md:grid-cols-2"
    >
      <input type="hidden" name="subject" value="Contact client" />
      <input type="hidden" name="from_name" value="Studio bleuvert" />

      <div className="w-full">
        <div>Nom</div>
        <Input type="text" name="name" required />
      </div>

      <div>
        <div>Email</div>
        <Input type="email" name="email" required />
      </div>

      <div className="md:col-span-2">
        <div>Votre message</div>
        <Textarea name="message" required />
      </div>

      <Button type="submit" className="md:col-span-2" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 animate-spin" />}Envoyer
      </Button>
    </form>
  );
}

export default App;
