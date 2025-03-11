import { ContactFormValues } from "@/schema/contact-form-schema";

const BASE_URL = process.env.Next_PUBLIC_API_URL;


export const submitContactForm = async (formData: ContactFormValues) => {
  try {
    const response = await fetch(`${BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};

export const subscribeToNewsletter = async (email: string) => {
  try {
    const response = await fetch(`${BASE_URL}/newsletter/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};
