import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, rem } from '@mantine/core';
import '@mantine/carousel/styles.css'
import { ProductsCard } from './ProductsCard';

const data = [
  {
    image: '/images/MCB.jpg',
    title: 'MCB',
    category: '',
  },
  {
    image: '/images/ACB.jpg',
    title: 'ACB',
    category: '',
  },
  {
    image: '/images/Relay.jpg',
    title: 'Relay',
    category: '',
  }
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <ProductsCard image = {item.image} title={item.title} description={item.category}/>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '33.33%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 3}
    >
      {slides}
    </Carousel>
  );
}