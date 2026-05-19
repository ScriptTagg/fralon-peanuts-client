import PageWrapper from "@/shared/components/shared/PageWrapper";
import FavoriteProducts from "./sections/FavoriteProducts";
import PageHero from "@/shared/components/layout/PageHero";

export default function FavoritesPage() {
  return (
    <PageWrapper>
      <PageHero title="Favorites" />
      <FavoriteProducts />
    </PageWrapper>
  );
}
