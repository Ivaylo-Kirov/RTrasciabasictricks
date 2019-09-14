import React from 'react';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            'name': '',
            'job': ''
        }
        this.state = this.initialState;
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    inserCharacter = () => {
        const {name, job} = this.state;
        this.props.insertCharacter({name, job});
        this.setState({name: '', job: ''})
    }

    render() {
        const {name, job} = this.state;
        return(
            <div>
                <form>
                    <input type="text" name="name" value={name} onChange={this.handleChange} />
                    <input type="text" name="job" value={job} onChange={this.handleChange} />
                    <input type="button" onClick={this.inserCharacter} />
                </form>
            </div>
        )
    }
}

export default MyForm;