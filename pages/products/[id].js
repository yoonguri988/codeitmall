import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  // id: 파일이름
  const { id } = router.query;
  return <div>Product {id} 페이지</div>;
}
