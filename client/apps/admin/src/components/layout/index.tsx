import React, { ReactNode } from "react";

import QueryProvider from "queries/provider";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <QueryProvider>
      <Header />
      <main className="flex justify-center">
        <div className="max-w-[1100px] w-full px-10 py-5">{children}</div>
      </main>
    </QueryProvider>
  );
};

export default Layout;
