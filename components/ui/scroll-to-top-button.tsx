import { IconArrowUp } from "@tabler/icons-react";

export function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 hidden md:flex dark:bg-primary/10 dark:text-white rounded-full shadow-lg p-4 dark:hover:bg-primary/20 cursor-pointer transition-colors items-center justify-center border-1 border-primary"
      aria-label="Scroll to top"
    >
      <IconArrowUp className="h-5 w-5" />
    </button>
  );
}
