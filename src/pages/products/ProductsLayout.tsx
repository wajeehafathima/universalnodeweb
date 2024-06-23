import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ProductsBar from './ProductsBar';
import { HeaderMenu } from '../../components/HeaderMenu';


export function ProductsLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 100 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <HeaderMenu></HeaderMenu>
      </AppShell.Header>

      <AppShell.Navbar p="md"><ProductsBar></ProductsBar></AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}

export default ProductsLayout