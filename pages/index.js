import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import style from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

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
      <h1>codeitmall</h1>
      <SearchForm />
      <ProductList products={products} />
    </>
  );
}
