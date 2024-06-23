import { useRouter } from 'next/router';
import ProductsLayout from './ProductsLayout';
import Fans from '../products/Fans';

const ProductPage = () => {
  const router = useRouter();
  const { page } = router.query;

  let Component;
  switch (page) {
    case 'Fans':
      Component = Fans;
      break;
    default:
      Component = () => <div>Page not found</div>;
  }

  return (
    <ProductsLayout>
    </ProductsLayout>
  );
};

export default ProductPage;
