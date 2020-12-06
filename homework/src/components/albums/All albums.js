import React, {Component} from 'react';
import AlbumComponent from "./Album Component";

class AllAlbums extends Component {
    state = {albums:[], chosenAlbum:null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(albumsFromApi=>{
                this.setState({albums:albumsFromApi})
            })
    }

    selectAlbum = (id)=>{
        let chosenAlbum = this.state.albums.find(value => value.id===id);
        this.setState({chosenAlbum})
    }

    render() {
        let {albums, chosenAlbum}=this.state;
        return (
            <div>
                {albums.map(value =>
                    <AlbumComponent
                        item={value}
                        key={value.id}
                        selectAlbum={this.selectAlbum}
                    />
                )}
                <hr/>
                {chosenAlbum && <AlbumComponent item={chosenAlbum}/>}
            </div>
        );
    }
}

export default AllAlbums;