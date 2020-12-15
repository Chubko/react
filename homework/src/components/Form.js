import React, {Component} from 'react';

class Form extends Component {
    state = {inputValue:[], chosenUser:null}
    myForm = React.createRef();

    render() {
        const {chosenUser} = this.state;

        return (
            <div>
                <form
                    // action='/user'
                    onSubmit={this.showUser}
                    ref={this.myForm}
                >
                    <input
                        type='number'
                        placeholder="Enter user's ID"
                        onInput={this.commitState}
                        value={this.state.inputValue}
                    />
                    <button>Show user</button>
                </form>
                <hr/>
                {chosenUser ? <div>id: {chosenUser.id} name: {chosenUser.name}</div> : <div>User isn't found!</div>}
            </div>
        );
    }

    showUser = (e)=>{
        e.preventDefault();
        const {items} = this.props;
        this.setState({chosenUser: items.find(value => value.id == e.target.children[0].value)})
    }

    commitState = (e)=>{
        this.setState({inputValue: e.target.value})
    }
}

export default Form;