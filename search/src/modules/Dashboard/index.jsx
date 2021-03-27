import React, { useState } from 'react';
import _ from 'lodash';

import { Box } from '@material-ui/core';

import { ItemCard } from '../../components/Card';
import SearchAppBar from '../../components/SearchBar';
import data from '../../data.json';
import useStyles from './styles';

const renderItems = (data) => _.map(data, item => (
    <ItemCard
        key={item.id}
        imageUrl={item.imageUrl}
        itemName={item.name}
        itemPrice={item.price}
    />
));

export default function Dashboard() {
    const classes = useStyles();
    const [filteredData, setFilteredData] = useState(data);

    const searchItem = (searcedString) => {
        console.log(searcedString);
        if (searcedString) {
            const filteredData = _.filter(data, d => 
                _.includes(_.get(d, 'name').toLowerCase(), searcedString.toLowerCase())
            );
            setFilteredData(filteredData);
        } else {
            setFilteredData(data);
        }
    }

    return (
        <Box className={classes.container}>
            <Box className={classes.root}>
                <Box>
                    <SearchAppBar action={searchItem}/>
                </Box>
                <Box className={classes.itemContainer}>
                    {renderItems(filteredData)}
                </Box>
            </Box>
        </Box>
    );
}
