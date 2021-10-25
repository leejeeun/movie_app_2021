import React from "react";
class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/')
        }//리다이랙트 
    }//2번 실행
    render(){
        const {location} = this.props
        if(location.state){
            return <p>{location.state.title}</p>

        }
        else{
            return null
        }
    }//1번 실행
}
export default Detail;