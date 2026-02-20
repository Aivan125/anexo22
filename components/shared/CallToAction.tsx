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
          "text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-3 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          className,
        )}
      >
        {text}
        {showIcon && <ArrowRight className="size-6" />}
      </Button>
    </Link>
  );
};

export default CallToAction;
