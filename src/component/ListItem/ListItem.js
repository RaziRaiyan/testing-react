import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({title, desc}) => {
    return (
        <>
        {!title ? null: (
            <div data-test="ListItemComponent">
            <h1 data-test="componentTitle">{title}</h1>
            <p data-test="componentDescription">{desc}</p>
        </div>
        )}
        </>
    );
}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ListItem;
