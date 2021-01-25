import { Component } from "react";
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import { hotelsActions } from '../redux/actions/actionTypes';
import GetOffer from "./GetOffer";
import success from './icon/success.svg';

class Offer extends Component {
    constructor(props) {
        super(props);
        this.props.getHotelsInfo();
        this.state = {
            buttonClicked: false
        }
    }

    //go to GetOffer page
    handleClick = (e) => {
        console.log("clicked:", e);
        this.setState({
            buttonClicked: true
        })
        console.log("button: ", this.state.buttonClicked)
    }

    render() {
        const buttonClicked = this.state.buttonClicked;
        const hotels = this.props.hotels;
        console.log("offerdayım");
        console.log("hotels:", hotels);
        return (

            <div className='container'>
                {!buttonClicked ?
                    hotels.map(hotel =>
                        <div>
                        <img src={hotel.imageUrl} alt='resim' />
                            <div className='row'>
                                {hotel.listingDataBrief.map(list =>
                                    <div className='col-4' key={list.value}>{list.label + ' ' + list.value}</div>
                                )}
                            </div>
                            <h4>{hotel.district.name}</h4>
                            <h2>{hotel.name}</h2>
                            <StarRatings
                                rating={hotel.score}
                                starDimension="20px"
                                starSpacing="1px"
                                starRatedColor="blue"
                                //changeRating={this.changeRating}
                                numberOfStars={5}
                                name='rating'
                            />
                            {'  ' + hotel.commentCount + ' '}
                            <img src={success} width='2%' alt='icon' />
                            <span>{'  '}İnceleme</span>
                            <br /><br />
                            <Button outline color="danger" size="sm">İncele</Button>{'  '}
                            <Button color="danger" size="sm" onClick={this.handleClick}>Ücretsiz Teklif Al</Button>
                            <br /><br />
                        </div>
                    )
                    :
                    <GetOffer />
                }
            </div>
        );
    }
}

const stateToProps = (state) => ({
    hotels: state.hotels
})
const dispatchToProps = {
    getHotelsInfo: hotelsActions.getHotelsInfo
}

export default connect(stateToProps, dispatchToProps)(Offer);