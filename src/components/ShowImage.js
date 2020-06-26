import React from 'react';

const ShowImage = ({ image, where }) => {
    if (image !== undefined || image !== null || image !== '') {
        return image ? (
            <div>
                <img src={image} alt="chosen food" />
            </div>
        ) : (<div className="no-image">
            <img src={require('../images/' + where + '.png')} alt="Icon made by Freepik from www.flaticon.com" />
        </div>)

    } else {
        return (
            <div className="no-image">
                <img src={require('../images/' + where + '.png')} alt="Icon made by Freepik from www.flaticon.com" />
            </div>
        )
    }
}

export default ShowImage;