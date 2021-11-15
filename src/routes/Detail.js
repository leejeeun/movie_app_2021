import React from "react";
import "./Detail.css"
class Detail extends React.Component{

    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/')
        }//리다이랙트 
    }//2번 실행
    render(){
        const {location} = this.props;

       console.log(location.state)
    //     <div className="bg" style={{background:'url("'+  location.state.poster +'") no-repeat '}}>
        if(location.state){
            return (
            <div className="bg">
                <div className="bg-img" style={{background:'url("'+  location.state.poster +'") no-repeat '}} ></div>
                <div className="detail">
                    <div className="movie">
                    <h3 className="movie_title">{location.state.title}</h3>
                    <p className="movie_year">{location.state.year}</p>
                    <ul className="genres">
                    {location.state.genres.map((n, index) => {
                        return (
                            <li key={index} className="genres_genre" > {location.state.genres[index]} </li>
                        )
                    })}
                            
                        
                    </ul>
                    <p className="movie_summary">{location.state.summary}</p>
                    </div>
                </div>
            </div>
            );

        }
        else{
            return null
        }
    }//1번 실행
}
export default Detail;