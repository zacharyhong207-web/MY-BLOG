import { cn } from "@/lib/utils";

interface CalloutProps {
  children: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Callout({ children, type = "default" }: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 flex items-start rounded-xl border p-4",
        "backdrop-blur-xl liquid-glass-inner-shadow",
        type === "default" && "border-blue-500/20 bg-blue-500/10 text-blue-100",
        type === "warning" && "border-amber-500/20 bg-amber-500/10 text-amber-100",
        type === "danger" && "border-red-500/20 bg-red-500/10 text-red-100"
      )}
    >
      <div className="text-sm">{children}</div>
    </div>
  );
}
