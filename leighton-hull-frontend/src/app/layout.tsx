import React, { PropsWithChildren, Suspense } from "react";
import "@/app/globals.css";
import GlobalLoadingProvider from "@/common/components/global-loading-provider";
import ClientOnlySnackbarProvider from "@/common/components/client-only-snackbar-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leighton Hull",
  description: "Leighton Hull",
  icons: [
    {
      url: "/icons/favicon.png",
      href: "/icons/favicon.png"
    }
  ]
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="relative">
        <div
          className="bg-grey20 min-h-[100dvh]"
          style={{
            minHeight: "calc(100vh - var(--header-height))"
          }}
        >
          <Suspense>
            <ClientOnlySnackbarProvider>{children}</ClientOnlySnackbarProvider>
            <GlobalLoadingProvider />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
