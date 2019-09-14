import React from 'react';
import {TableHead} from './TableHead';
import {TableBody} from './TableBody';

class Table extends React.Component {

    render() {
        const {characterData} = this.props;

        return(
            <table>
                <TableHead />
                <TableBody characters={characterData} removeCharacter={this.props.removeCharacter} />
            </table>
        )
    }
}

export {Table};