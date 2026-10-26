import { manrope, spaceGrotesk } from "@/configs/fonts";
export { metadata } from "@/configs/metadata";
export { viewport } from "@/configs/viewport";
import "@/configs/styles";

import GlobalProvider from "@/providers/global-provider";

import { cn } from "cn";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        spaceGrotesk.variable,
        manrope.variable,
      )}
    >
      <body
        suppressHydrationWarning
        className="min-h-full w-full flex flex-col"
      >
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
