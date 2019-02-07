import React, {Component} from 'react';

class TodoList extends Component {
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input 
                        type="text" 
                        placeholder="Add a task here..."
                        ref={this.props.inputElement}
                        value={this.props.currentItem.text} 
                        onChange={this.props.handleInput}/>
                        <button type="submit"> ADD TASK </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;