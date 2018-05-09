import React, { Component } from 'react';
import { func, element } from 'prop-types';

class Outside extends Component {
    wrapper;
    
    componentDidMount(){
        document.addEventListener('mousedown', this.clickListener);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.clickListener);
    }

    clickListener = (event) => {
        if(this.wrapper && !this.wrapper.contains(event.target) && this.props.onClickOutside){
            this.props.onClickOutside(event);
        } else if (this.wrapper && this.wrapper.contains(event.target) && this.props.onClickInside){
            this.props.onClickInside(event);
        }
    }

    setWrapperElement(ref){
        this.wrapper = ref;
    }

    render(){
        const { children } = this.props;
        return (
            <div 
            style={{
              height: '100%',
              display:'inline-block',
            }} ref={(ref) => this.setWrapperElement(ref)}>
                {children}
            </div>
        )
    }
}

Outside.propTypes = {
    onClickOutside: func,
    onClickOutside: func,
    children: element.isRequired,
}

export default Outside;