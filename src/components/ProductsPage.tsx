import { CardsCarousel } from "./CardsCarousel";
import { Title, Container } from "@mantine/core";
import classes from '../../styles/Home.module.css'

const mockdata = [
    { label: '4 passengers', icon: "" },
  ];

export function ProductsPage() {
    const products = mockdata.map((feature) => (
      <Container size="lg" className={classes.wrapper}>
      <Title ta="center" className={classes.marginbottom}>
        Our Products
      </Title>
      <CardsCarousel></CardsCarousel>
      </Container>
    ));
  
    return (
        products
    );
  }