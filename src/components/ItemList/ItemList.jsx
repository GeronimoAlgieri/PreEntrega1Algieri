import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ItemDetail = ({ items }) => {
  return (
    <div
      className="cards"
      style={{
        justifyContent: "space-evenly",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        marginTop: "80px",
        marginLeft: "180px",
        gap: "40px",
      }}
    >
      {items.map((item) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                width="250"
                image={item.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  U$S {item.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`itemDetail/${item.id}`}>
                <Button variant="contained" size="small">
                  Ver Detalle
                </Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemDetail;
