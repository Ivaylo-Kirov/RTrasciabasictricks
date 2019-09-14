import React from 'react';

class TableBody extends React.Component {
    removeCharacter = (i) => {
        this.props.removeCharacter(i);
    }

    render() {
        const {characters} = this.props;
        const result = characters.map((character, index) => {
            return (
                <tr key={index}>
                    <td>{character.name}</td>
                    <td>{character.job}<input type="button" onClick={() => this.removeCharacter(index)} /></td>
                    
                </tr>
            )
        })
        return (
            <tbody>
                {result} 
            </tbody>
        )
    }
}

export {TableBody};