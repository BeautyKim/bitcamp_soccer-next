import axios from "axios";
import React, { useCallback } from 'react';
import { Nav } from "common";
import Link from "next/link";
import Head from "next/head";
import styles from "common/style/Nav.module.css";
import animationStyle from 'basic/style/animation.module.css'
import Image from "next/image";

const Button = ({ onClick }) => (
  <article className={animationStyle.article} onClick={onClick}></article>
);

export default function Home() {
  const onClick = useCallback(() => {
    axios.get("http://localhost:5000/api/now").then((res) => {
      alert(JSON.stringify(res.data))
      var data = res.data;
      document.getElementById("timeZone").innerHTML = '<h1>현재시간: '+data.now+'<h1>'
    });
  });
  return (
    <>
    <Head>
    <title>BeautyKim| HOME</title>
    </Head>
    <body>
    <Button onClick={onClick} />
    <div id="timeZone"></div>
      <Image src={"/images/좀비춤.gif"} width={1000} height={800}/>
    </body>
    </>
  )
}