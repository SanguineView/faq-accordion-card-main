import React, {Component} from 'react'

class QuestionAnswer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active:false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState((prevState) => {
            return { active: !prevState.active}
        })
        console.log(this.state.active)
    }
    render() {
        return (
            <li className='faq-item'>
                <div className={`faq-item-head ${this.state.active ? 'active' : 'unactive'}`} onClick={this.handleClick}>
                    <h2 className="faq-item-q">{this.props.question}</h2>
                    <img src='images/icon-arrow-down.svg' className='arrow' alt='arrow' />
                </div>
                <div className="faq-item-body">
                    <p className="faq-item-a">{this.props.answer}</p>
                </div>
            </li>
        )
    }
}

export default QuestionAnswer