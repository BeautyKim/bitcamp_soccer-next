import axios from "axios";
import React, { useCallback } from 'react';
import { Nav } from "common";
import Link from "next/link";
import Head from "next/head";
import styles from "common/style/Nav.module.css";

const Button = ({ onClick }) => (
  <button onClick={onClick}>현재 시간</button>
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
    <title>비트캠프 HOME</title>
    </Head>
    <h1 className="title">
      Home{' '}
      <Link href="game/game-list.js">
      <a>목록</a>
      </Link>
    </h1>
    <Button onClick={onClick} />
    <div id="timeZone"></div>
    </>
  )
}