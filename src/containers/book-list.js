import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class Booklist extends Component {
    
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)} 
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) { // take application state as arguments 
    // and whatever is return will show up as props inside of BookList
    return { // whatever object returns from here is used as props above
        books: state.books
    };
}

// Anything returned from this function will end up as props 
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be pass
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container - it needs to know
//about this new dispatch method, selectBook. Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
// connect takes a function and a component and produces a container

//Container - whenever we forge a connection between a component and redux it is a Container