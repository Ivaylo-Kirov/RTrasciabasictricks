import React from 'react';

class TableHead extends React.Component {

    render() {
        return (<thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>)
    }
}

export {TableHead};