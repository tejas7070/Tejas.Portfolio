import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import type { InsertContactMessage } from "@shared/schema";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        },
        PUBLIC_KEY
      );
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    },
  });
}
