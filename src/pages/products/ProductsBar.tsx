import { ScrollArea } from '@mantine/core';
import { useRouter } from 'next/router';
import {
  IconPropeller,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconLock,
} from '@tabler/icons-react';
import { LinksGroup } from '../../components/NavbarLinksGroup';
import '@mantine/core/styles.css'; // Import Mantine styles
import classes from '../../../styles/ProductsBar.module.css';


const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Fans',
    icon: IconPropeller,
    initiallyOpened: true,
    links: [
      { label: 'Ceiling Fans', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Relays',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'LT Protection', icon: IconPresentationAnalytics },
  {
    label: 'LT Metering',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

export default function ProductsBar() {
  const router = useRouter();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label}/>);

  return (
      <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  );
}