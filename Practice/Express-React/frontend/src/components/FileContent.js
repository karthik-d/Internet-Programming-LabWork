import React from 'react';

class FileContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: "Starting now!"
        };
        // register callbacks!
        this.makeApiCall = this.makeApiCall.bind(this);
        this.makeUser = this.makeUser.bind(this);
    }

    makeApiCall() {
        fetch(
            'http://localhost:9000/api/files',
            {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response.message);
                this.setState({
                    content: response.message
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    makeUser(e) {
        fetch('http://localhost:9000/api/files',
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: e.target.value
                })
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // componentDidMount() {
    //     this.makeApiCall();
    // }

    render() {
        return (
            <div>
                <button onClick={this.makeApiCall}> Call API </button>
                <p>{this.state.content}</p>
                <form>
                    <input type="text" placeholder="Name" />
                </form>
                <button onClick={this.makeUser} value="Ben">Create User</button>
            </div>
        );
    }
}

export default FileContent;