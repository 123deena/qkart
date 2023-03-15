import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardMedia>
        <img src={product.image} alt={product.name} height={250} />
        </CardMedia>
      <CardContent>
        <Typography><p>{product.name}</p></Typography>
        <Typography>
          <p>${product.cost}</p>
        </Typography>
        <Rating name="simple-controlled" value={product.rating} readOnly />
        <Typography>
          <Button className="card-button" variant="contained">
            <AddShoppingCartOutlined /> ADD TO CART
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
