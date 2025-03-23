import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

type Props = { children: React.ReactNode }
const Item = ({children}: Props) => (<Paper>{children}</Paper>)

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid size={8}>
          <Typography variant="h1" gutterBottom>Shnigi Coins</Typography>
        </Grid>
        <Grid size={6}>
          <Item>
          <Typography variant="h3" gutterBottom>Details</Typography>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Item>Contact address:</Item>
              <Item>Ticker:</Item>
              <Item>Tax:</Item>
              <Item>LP:</Item>
            </Stack>
          </Item>
        </Grid>
        <Grid size={2}>
          <Item>size=2</Item>
        </Grid>
        <Grid size={8}>
          <Item>&copy; 2025 Shnigi Coins</Item>
        </Grid>
      </Grid>
    </Container>
  );
}
