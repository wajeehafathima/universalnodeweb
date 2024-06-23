import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
  } from '@mantine/core';
  import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
  import { ContactIconsList } from '../components/ContactIcons';
  import '@mantine/core/styles.css'; // Import Mantine styles
  import classes from '../../styles/ContactUs.module.css';
  import { MantineProvider, MantineThemeOverride } from '@mantine/core';

  const theme: MantineThemeOverride = {
    colors: {
      myColor: [
        '#ffeaec',
        '#fdd4d6',
        '#f4a7ac',
        '#ec777e',
        '#e64f57',
        '#e3353f',
        '#e22732',
        '#c91a25',
        '#b31220',
        '#9e0419',
      ],
    },
  };

  const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
  
  export default function ContactUs() {
    const icons = social.map((Icon, index) => (
      <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
        <Icon size="1.4rem" stroke={1.5} />
      </ActionIcon>
    ));
  
    return (
      <MantineProvider theme={theme}>
      <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you soon!
            </Text>
  
            <ContactIconsList />
  
            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
  
            <Group justify="flex-end" mt="md">
              <Button className={classes.control}>Send message</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
      </MantineProvider>
    );
  }