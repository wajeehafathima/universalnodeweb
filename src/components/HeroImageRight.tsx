import { Container, Title, Text, Button } from '@mantine/core';
import classes from '../../styles/HeroImageRight.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
            Innovative{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: '#FDD4D6', to: '#C91A25' }}
              >
                Electrical Solutions
              </Text>{' '}
              for Modern Needs
            </Title>

            <Text className={classes.description} mt={30}>
              At Universal Electricals, we specialize in creating world-class, innovative electrical products tailored for everyday needs. Our exceptional designs, 
              including unique offerings, set us apart in the market. Utilizing advanced techniques and high-quality materials sourced from trusted suppliers, 
              our products meet stringent industry standards. Committed to excellence and customer satisfaction we deliver top-notch solutions that combine 
              practicality and great design, making a lasting impression in the industry.
            </Text>

            <Button
              size="xl"
              className={classes.control}
              mt={40}
              onClick={() => location.assign('/products/ProductsLayout')}
            >
              Products
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}