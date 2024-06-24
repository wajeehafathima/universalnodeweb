import { Text, Container, ActionIcon, Group, Grid, rem, Title, Flex } from '@mantine/core';
import { IconMapPin, IconMail, IconPhone, IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from '../../styles/Footer.module.css';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid>
          <Grid.Col span={4}>
            <div className={classes.logo}>
              <Flex align="center">
                <img src="/ue.svg" alt="Universal Electricals" height="50em" />
                <Title tt="uppercase" c="#c91a25" fw={500} size="12px" lh="md" >
                  Universal Electricals
                </Title>
              </Flex>
              <Text size="xs" c="dimmed" className={classes.description}>
                Innovative and High-Quality Electrical Solutions
              </Text>
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <Text fw={700} size="lg" mb="md">
              Resources
            </Text>
            <Text<'a'> component="a" className={classes.link} href={'#'} onClick={(event) => event.preventDefault()} c="dimmed">Home</Text>
            <Text<'a'> component="a" className={classes.link} c="dimmed">About Us</Text>
            <Text<'a'> component="a" className={classes.link} href={'/products/ProductsLayout'} c="dimmed">Products</Text>
            <Text<'a'> component="a" className={classes.link} href={'/ContactUs'} c="dimmed">Contact Us</Text>

          </Grid.Col>
          <Grid.Col span={4}>
            <Text fw={700} size="lg" mb="md">
              Contact Us
            </Text>
            <Flex align="center">
              <IconMapPin color="gray" size={35} />
              <Text c="dimmed" ml="sm" size="sm">H. No 8-1-398/PM/189, Paramount Hills, Tolichowki, Hyderabad, Telangana</Text>
            </Flex>
            <Flex align="center" mt="xs"  className={classes.breakword}>
              <IconMail color="gray" size={20} />
              <Text c="dimmed" ml="sm" size="sm">universalelectricals369@gmail.com universalelectricals276@gmail.com</Text>
            </Flex>
            <Flex align="center" mt="xs">
              <IconPhone color="gray" size={20} />
              <Text c="dimmed" ml="sm" size="sm"> +91 8179423825 / +91 9440427893</Text>
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>

      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Universal Electricals. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default Footer;