import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './search-bar';
import VideoList from './video-list';
import VideoDetails from './video-details';


const API_KEY = '';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch = this.videoSearch.bind(this);
        this.onVideoSearchComplete = this.onVideoSearchComplete.bind(this);
        this.onVideoSelect = this.onVideoSelect.bind(this);

        this.videoSearch('surfboards');
    }

    render() {
        const videoSearch = _.debounce(this.videoSearch, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetails video={ this.state.selectedVideo } />
                <VideoList 
                    onVideoSelect={ this.onVideoSelect }
                    videos={ this.state.videos } />
            </div>
        );
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term }, this.onVideoSearchComplete);
    }

    onVideoSearchComplete(videos) {
        const selectedVideo = videos[0];
        this.setState({ videos, selectedVideo });
    }

    onVideoSelect(selectedVideo) {
        this.setState({ selectedVideo });
    }
}
