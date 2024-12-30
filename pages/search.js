import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import styles from "@/styles/Search.module.css";
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import Head from "next/head";

export async function getServerSideProps(context) {
  const q = context.query["q"];

  const res = await axios.get(`/products/?q=${q}`);
  const products = res.data.results ?? [];

  return { props: { q, products } };
}

export default function Search({ q, products }) {
  return (
    <>
      <Head>
        <title>{q} 검색결과 - Codeitmall</title>
      </Head>
      <div>
        <SearchForm initialValue={q} />
        <h2 className={styles.title}>
          <span className={styles.keyword}>{q}</span> 검색 결과
        </h2>
        <ProductList className={styles.productList} products={products} />
      </div>
    </>
  );
}
