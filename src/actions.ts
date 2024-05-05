"use server";

export async function submitForm(prevState: any, formData: FormData) {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success === true) {
      return { success: true, message: data.message };
    }
    return { success: false, message: data.message };
  } catch (error) {
    throw new Error("Erreur lors de l'envoi du mail.");
  }
}
