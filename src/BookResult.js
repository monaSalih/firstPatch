import React from 'react'
class bookResult extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getBook}>
                <label>book Exam</label>
                <input type="text" name="nameBo"/>
                {/* <input type="text" name="bookDesc"/>
                <input type="number" name="bookNum"/> */}
                <input type="submit" value="get DBs"/>
               
                </form>


                
            </div>
        )
    }
}

export default bookResult
