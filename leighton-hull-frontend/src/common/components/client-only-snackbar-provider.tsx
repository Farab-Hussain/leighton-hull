"use client";

import React from "react";
import { SnackbarProvider } from "notistack";

function ClientOnlySnackbarProvider({ children }: React.PropsWithChildren) {
  return <SnackbarProvider>{children}</SnackbarProvider>;
}

export default ClientOnlySnackbarProvider;
