import { Component } from 'react';

class Final extends Component {
    render() {
        return (
            <div className='container'>
                <br /><br /><br />
                <div className='row'>
                    <div className='col-3'>
                        <h4>Ücretsiz fiyat teklifi al</h4>
                    </div>
                    <div className='col-1'>
                        X
                    </div>
                </div>
                <h4 color='#456789'><ion-icon name="checkmark-circle-outline"></ion-icon>Fiyat teklifin başarıyla iletildi</h4>
            </div>

        )
    }
}

export default Final;
