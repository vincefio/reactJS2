import React, { Component } from 'react'
import { Consumer } from '../context'
import { Col, Card } from 'react-materialize'

export default class Contact extends Component {
    onDeleteClick = (id, dispatch) => {
        console.log('delete clicked id is ' + id)
        console.log('dispatch ' + dispatch)
    }

    render() {
        return (
            <div>

                <Consumer>
                    {context => (

                        <Col s={7}>
                            <Card className='blue-grey darken-1' textClassName='white-text' title={this.props.name}>
                                {this.props.phone}

                                <i className="fas fa-times" onClick={this.onDeleteClick.bind(this, this.props.id, context.dispatch)} style={{ cursor: 'pointer', float: 'right' }} />
                            </Card>

                        </Col>
                    )}
                </Consumer>
            </div>
        )
    }
}
