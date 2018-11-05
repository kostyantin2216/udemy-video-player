import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './search-bar';

const API_KEY = 'AIzaSyAFBqEDshwo4pOz_FshJfljoMfOJiHz_Uc';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos })
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}
