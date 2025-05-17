import { forwardRef } from "react";
import clsx from "clsx";

/**
 * A simplified container component that provides consistent padding and width constraints.
 * Use the `size` prop to control the max-width of the container content.
 */
export const Container = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    size?: "default" | "wide";
  }
>(function Container({ className, children, size = "default", ...props }, ref) {
  return (
    <div ref={ref} className={clsx("sm:px-2", className)} {...props}>
      <div className="mx-auto w-full max-w-7xl lg:px-4">
        <div className="relative px-2 sm:px-4 lg:px-8">
          <div
            className={clsx(
              "mx-auto",
              size === "wide" ? "max-w-5xl" : "max-w-2xl lg:max-w-5xl",
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
});
