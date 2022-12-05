import React from 'react';

class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.prepareSubmit = this.prepareSubmit.bind(this);
    }

    prepareSubmit(e) {
        e.preventDefault();
        var data = {};
        console.log("HERE");
        console.log(e.target.parentNode.children.length);
        for (var node of e.target.parentNode.children) {
            if (node.name) {
                data[node.name] = node.value;
            }
        }
        this.props.submitPropagator(data);
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Name" name="name" />
                <input type="text" placeholder="Username" name="username" />
                <input type="password" placeholder="Password" name="password" />
                <button onClick={this.prepareSubmit}>Create User</button>
            </form>
        );
    }
}

export default UserForm;