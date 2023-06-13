import React from "react"

class Assento extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        }
    }

    handleClick() {
        this.setState({
            disabled: true
        })
    }

    render() {
        return(
            <button className="assento"
             type="button"
             disabled={this.state.disabled}
             onclick={() => this.handleClick()}
             >
                {this.state.disabled ? 'X' : this.props.pos}
             </button>
        )

    }

    
}


const Fileira = (props) => {
    return(
        <div className="fileira">
            {[0,1,2,3].map((pos, index) => (
                <Assento key={index} pos={props.de + pos} />
            ))}
        </div>
    )
}



export const AssentosOnibus = () => {
    return(
        <div className="container">
        {[1,5,9,13,17].map((pos, index) => (
            <Fileira key={index} de={pos} />
        ))}
        </div>
    )
}
