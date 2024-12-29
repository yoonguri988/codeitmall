import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import styles from "@/styles/Home.module.css";
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import Head from "next/head";

export default function Home() {
  const [products, setProducts] = useState();

  async function getProducts() {
    const res = await axios.get(`/products`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Codeitmall</title>
      </Head>
      <SearchForm />
      <ProductList className={styles.products} products={products} />
    </>
  );
}
