import { Card, Image, Text, Group, Button, Divider, useMantineTheme, } from '@mantine/core';
import classes from '../../styles/ProductsCard.module.css';

interface ProductsCardProps {
  image: string;
  title: string;
  description: string;
  links?: { label: string; link: string }[];
}


export function ProductsCard({ image, title, description, links }: ProductsCardProps) {
  const theme = useMantineTheme();  
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section className={classes.section}>
        <Image src={image} alt={title} height={400} width={400} />
      </Card.Section>
      <Card.Section className={`${classes.section} ${classes.blueBackground}`} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={600} color='#ffff'>
            {title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs" c="dimmed">
          {"SOME BASIC DESCRIPTION"}
        </Text>
        <Group mt="xs">
        <Button radius="md" variant="light" style={{ flex: 1 }} >
          Show details
        </Button>
      </Group>
      </Card.Section>
     
    </Card>
  );
}