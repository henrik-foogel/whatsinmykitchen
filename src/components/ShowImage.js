import React from 'react';

const ShowImage = ({base64}) => {
    console.log(base64);
    return base64 ? (
        <div><img src={"data:image/png;base64," +  base64} /></div>
    ) : (
        <div className="no-image">No image chosen</div>
    )
}

export default ShowImage;