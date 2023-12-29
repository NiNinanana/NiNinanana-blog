import React, { ReactNode } from "react";

import Header from "components/layout/header";
import QueryProvider from "queries/provider";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <QueryProvider>
      <Header />
      {children}
    </QueryProvider>
  );
};

export default Layout;
