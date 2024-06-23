import { ProductsPage } from '../components/ProductsPage';
import { HeroImageRight } from '../components/HeroImageRight'
import '@mantine/core/styles.css'; // Import Mantine styles

export default function Home() {
  return (
    <div>
      <HeroImageRight></HeroImageRight>
      <ProductsPage></ProductsPage>
    </div>
  );
}