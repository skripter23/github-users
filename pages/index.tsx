import type { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../components/Layout";
import Finder from "../components/Finder";
import { IHomePage } from "../types/interfaces";

const Home: NextPage<IHomePage> = ({ locale }) => {
  return (
    <Layout locale={locale}>
      <Finder />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
