import style from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>codeitmall</h1>
      <ul>
        <li>
          <Link href="/products/1">첫번째 상품</Link>
        </li>
        <li>
          <Link href="/products/2">두번째 상품</Link>
        </li>
        <li>
          <Link href="/products/3">세번째 상품</Link>
        </li>
        <li>
          <Link href="https://codeit.kr">코드잇</Link>
        </li>
      </ul>
    </>
  );
}
