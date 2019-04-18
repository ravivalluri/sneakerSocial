import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage =
  "https://images.unsplash.com/photo-1517466121016-3f7e7107c756?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing.unit * 10
    }
  },
  more: {
    marginTop: theme.spacing.unit * 2
  }
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout>
      {/* backgroundClassName={classes.background} */}
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: "none" }} src={backgroundImage} alt="" />
      {/* <Typography color="inherit" align="center" variant="h2" marked="center">
        DEADSTOCK
      </Typography> */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517466121016-3f7e7107c756?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
          backgroundSize: "cover",
          width: "100%",
          height: "85vh",
          minHeight: "500",
          maxHeight: "1300",
          marginTop: "70",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
          
        }}
      >
        {/* <div
          style={{
            backgroundColor: "#ffffff",
            height: "33%",
            width: "50%",
            color: "#000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
        </div> */}
        <Typography
          color="primary"
          align="center"
          variant="h5"
          className={classes.h5}
        >
          A Sneaker Social Network
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} href="/#/register" variant="button" />
          )}
        >
          Register
        </Button>
        <Typography variant="body2" color="primary" className={classes.more}>
          Discover the sneaker experience
        </Typography>
        
      </div>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHero);
