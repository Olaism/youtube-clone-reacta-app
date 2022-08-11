import React from 'react';

import { Paper, TextField } from '@mui/material';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({target}) {
        this.setState({ searchTerm: target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
    }

    render() {
        return (
            <Paper elevation={2} className="paper-search-form">
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;