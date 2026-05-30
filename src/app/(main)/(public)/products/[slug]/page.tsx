import SingleProductPage from "@/modules/products/SingleProductPage";

export default async function SingleProduct({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SingleProductPage />;
}
