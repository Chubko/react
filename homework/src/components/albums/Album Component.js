import React, {Component} from 'react';

class AlbumComponent extends Component {
    render() {
        let {item, selectAlbum}=this.props;
        return (
            <div>
                {item.id}-{item.title}
                <button onClick={()=>selectAlbum(item.id)}>Show album</button>
            </div>
        );
    }
}

export default AlbumComponent;