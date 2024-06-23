import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  rem,
  useMantineTheme,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconPropeller,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import classes from '../../styles/HeaderMenu.module.css';
import styles from '../../styles/Home.module.css';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';

const mockdata = [
  {
    icon: IconPropeller,
    title: 'Fans',
    description: 'BLDC Fans.',
  },
  {
    icon: IconCode,
    title: 'Relays',
    description: 'LT and HT Protection.',
  },
  {
    icon: IconCoin,
    title: 'LT Protection',
    description: 'Low Voltage Switchgear.',
  },
  {
    icon: IconBook,
    title: 'LT Metering',
    description: 'Metering and Power Measurement.',
  },
];

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.myColor[7]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between"h="100%">
        <Group justify="space-between" h="100%">
          <img src="/ue.svg" alt="Universal Electricals" className={styles.logo} />
          <Title tt="uppercase" c="#c91a25" fw={800} size="25px" lh="md"> Universal Electricals</Title>
        </Group>
          

          <Group visibleFrom="sm">
          <a href="/" className={classes.link}>
              Home
            </a>

            {/* Products are here */}
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href='/products/ProductsLayout' className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Products
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.myColor[7]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Products</Text>
                  <Anchor href="/products/ProductsLayout" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text size="xs" c="dimmed">
                        Explore Our Range: Innovative and High-Quality Electrical Solutions
                      </Text>
                    </div>
                    <Button variant="default" onClick={() => location.assign('/products/ProductsBar')}>View All Products</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>


            <a href="#" className={classes.link}>
              About Us
            </a>

            <Button color={theme.colors.myColor[9]} onClick={() => location.assign('/ContactUs')}>Contact</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>
     
    </Box>
  );
}