import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingButtonProps extends React.ComponentProps<typeof Button> {
  loading?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const LoadingButton = ({
  children,
  loading,
  disabled,
  className,
  ...props
}: LoadingButtonProps) => {
  return (
    <Button
      disabled={loading || disabled}
      className={cn(
        "flex cursor-pointer items-center justify-center gap-2 ",
        className
      )}
      {...props}
    >
      {loading && <Loader2 className="size-5 animate-spin" />}
      {children}
    </Button>
  );
};

export default LoadingButton;
