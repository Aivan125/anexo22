import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants/constants";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CallToActionProps {
  className?: string;
  text?: string;
  showIcon?: boolean;
}

const CallToAction = ({
  className,
  text = "Inscríbete Ahora",
  showIcon,
}: CallToActionProps) => {
  return (
    <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
      <Button
        className={cn(
          "text-lg bg-green-600 hover:bg-green-700 text-white font-bold gap-3 flex items-center justify-center",
          className
        )}
      >
        {text}
        {showIcon && <ArrowRight className="size-6" />}
      </Button>
    </Link>
  );
};

export default CallToAction;
