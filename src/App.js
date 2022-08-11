import React from 'react';
import './index.css';

import { SearchBar, VideoList, VideoDetail } from './components';

// require('dotenv').config()
const axios = require('axios');

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.handleSubmit('javascript');
    }

    handleVideoSelect = (video) => {
        this.setState( { selectedVideo: video} );
    }

    handleSubmit = async (searchTerm) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: process.env.REACT_APP_API_KEY,
                q: searchTerm
            }
        });

        console.log(response.data.items);

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    render() {
        const { videos, selectedVideo } = this.state;

        return (
            <main>
                <div className="container">
                    <div className="search-bar">
                        <SearchBar onFormSubmit={this.handleSubmit} />
                    </div>
                    <section className="videos">
                        <div className="video-detail">
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className="video-list">
                            <VideoList videos={videos} handleVideoSelect={this.handleVideoSelect} />
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}

export default App;