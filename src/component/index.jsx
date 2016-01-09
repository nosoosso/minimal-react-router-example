import React from 'react';
import { Link } from 'react-router'

const Index = React.createClass({
    render: function () {
        return (
            <div>
                <Link to="/hoge">hoge</Link><br/>
                <Link to="/fuga">fuga</Link><br/><br/>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Index;
