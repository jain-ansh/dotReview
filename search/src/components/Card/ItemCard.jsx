import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 300,
        maxWidth: 345,
        margin: '0px auto 20px',
        [theme.breakpoints.up('sm')]: {
            margin: 20,
        },
    },
    media: {
        height: 140,
    },
  }));

function ItemCard({ imageUrl, itemName, itemPrice }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={imageUrl}
                title=""
            />
            <CardContent>
                <Typography variant="h4">
                    {itemName}
                </Typography>
                <Typography variant="h6">
                    {itemPrice}
                </Typography>
            </CardContent>
        </Card>
    );
}

ItemCard.propTypes = {
    imageUrl: PropTypes.string,
    itemName: PropTypes.string,
    itemPrice: PropTypes.string,
};

export default ItemCard;
