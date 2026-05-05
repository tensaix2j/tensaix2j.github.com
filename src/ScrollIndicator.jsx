import { Mouse } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500">
      <Mouse className="w-6 h-6" />
      <div className="mt-2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}