import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { getEmps } from "./api/Employees";
import { prismaClientInit } from "../services/PrismaClientInit";

type Props = {
  emps: any;
};

const Home: NextPage = ({ emps }: Props) => {
  useEffect(() => {
    console.log("emps page ishere");
    if (emps) {
      console.log(emps);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Railway NextJS Prisma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Employees App</h1>
        <h2 className={styles.desc}>
          NextJS app connected to Postgres using Prisma and hosted on{" "}
          <a href="https://railway.app">Railway</a>
        </h2>
      </header>

      <main className={styles.main}>
        {emps && (
          <ul>
            {emps &&
              emps.map((ele) => (
                <li key={ele.id}>{ele.id + " - " + ele.email}</li>
              ))}
          </ul>
        )}
        {!emps && <p>Loading ...</p>}
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log("call data from server");

  const res = await prismaClientInit().employees.findMany();
  console.log(res);
  return {
    props: {
      emps: res,
    },
  };
};
