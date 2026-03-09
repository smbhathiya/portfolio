import { IconBrandWhatsapp } from "@tabler/icons-react";

export function WhatsAppMessageButton() {
  return (
    <a
      href="https://wa.me/94758041606"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 z-50 bg-green-500/70 text-white rounded-full shadow-lg p-4 hover:bg-green-600 transition-colors flex items-center justify-center group"
      aria-label="Message on WhatsApp"
    >
      <span className="mr-2 absolute left-0 translate-x-2 opacity-0 group-hover:relative group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        Message me
      </span>
      <IconBrandWhatsapp className="h-6 w-6" />
    </a>
  );
}
