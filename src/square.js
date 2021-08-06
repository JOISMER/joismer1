import  React from 'react';


class Square extends  React.Component {
    render(){
        return(
            <button clasName="square">
            {this.props.value}
            </button>
        )
    }
}

 export default  Square;
   

    
