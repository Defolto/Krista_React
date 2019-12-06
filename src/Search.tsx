import React, {Component} from 'react';

export interface SearchProps {
    value: string;
    onChangeHandler: (value: string) => void;
}

class Search extends Component<SearchProps> {
    render() {
        return (
            <input
                onChange={event => this.props.onChangeHandler(event.target.value)}
                value={this.props.value}
                type="text"
                placeholder="Поиск"
            />
        );
    }
}

export default Search;
