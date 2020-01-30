import React, { Component } from 'react';

class ButtonImgUpload extends Component {
    
    imageSelectedHandle(event){
        console.log(event.target.files[0])
    }
    
    render () {
        return (
            <div>
                <input onChange={this.imageSelectedHandle} type="file"></input>
            </div>
        )
    }
}

export default ButtonImgUpload;