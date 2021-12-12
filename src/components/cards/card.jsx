import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Paper,
  Card,
  CardContent,
  Typography,
  Grid,
  Text
} from "@mui/material";
import "../cards/card.css";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function BasicGrid(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1 />
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4} md={4} sm={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mortii
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Temperatura este un factor foaret important <br />
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {props.morti} cazuri
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4} md={4} sm={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Confirmat
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Temperatura este un factor foaret important <br />
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {props.confirm} cazuri
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4} md={4} sm={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Recuperat
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Umeditatea este un factor foaret important <br />
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {props.recuperat} cazuri
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
