import { Component } from "react";
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import { hotelsActions } from '../redux/actions/actionTypes';
import Succeed from "./Succeed";
import success from './icon/success.svg';

class Offer extends Component {
    constructor(props) {
        super(props);
        this.props.getHotelsInfo();
    }

    //go to Succeed page
    handleClick = (e) => {
        <div>
            <Succeed />
        </div>
    }

    render() {
        const hotels = this.props.hotels;
        console.log("offerdayım");
        console.log("hotels:", hotels);
        return (
            <div className='container'>
                {hotels.map(hotel =>
                    <div>
                        <img src={hotel.imageUrl} alt='resim' />
                        <div className='row'>
                        {hotel.listingDataBrief.map(list =>
                            <div className='col-4'>{list.label + ' ' + list.value}</div>
                        )}
                        </div>
                        <h4>{hotel.district.name}</h4>
                        <h2>{hotel.name}</h2>
                            <div className='row'>
                                <div className='col-4'>
                                    <StarRatings
                                        rating={hotel.score}
                                        starDimension="20px"
                                        starSpacing="1px"
                                        starRatedColor="blue"
                                        //changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                </div>
                                <div className='col-1' text-align='right'>
                                    {hotel.commentCount}
                                </div>
                                <div className='col-1'>
                                    <img src={success} width='2%' alt='icon' />
                                </div>
                                <div className='col-4'>

                                </div>
                        </div>
                        <Button outline color="danger" size="sm">İncele</Button>{' '}
                        <Button color="danger" size="sm" onClick={this.handleClick}>Ücretsiz Teklif Al</Button>
                        <br /><br />
                    </div>
                )}
                <Succeed />
            </div>
        );
    }
}

const style = {
    frame: {

    },


}

const stateToProps = (state) => ({
    hotels: state.hotels
})
const dispatchToProps = {
    getHotelsInfo: hotelsActions.getHotelsInfo
}

export default connect(stateToProps, dispatchToProps)(Offer);