import type { FC } from "react";

import Head from "next/head";
import Header from "./components/Header";

interface ILayout {
  children: React.ReactNode;
  locale: string;
}

const Layout: FC<ILayout> = ({ children, locale }) => {
  return (
    <main>
      <Head>
        <title>Github users</title>
        <meta name="description" content="Github user finder" />
      </Head>
      <Header locale={locale} />
      {children}
    </main>
  );
};

export default Layout;
