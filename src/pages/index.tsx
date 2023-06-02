import type { NextPage } from "next";
import Head from "next/head";
import { MemeProView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div  className=" flex flex-col h-screen justify-between">
      <Head>
        <title>MEME MAKER</title>
        <meta
          name="description"
          content="Welcome to the 11pxl MEMEMAKER!"
        />
      </Head>
      <MemeProView />
    </div>
  );
};

export default Home;
