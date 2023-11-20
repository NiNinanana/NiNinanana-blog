import React, { ReactNode } from "react";

import QueryProvider from "queries/provider";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Layout;
