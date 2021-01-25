import { Component } from "react";
import { Button, Input, Form, FormGroup, FormText, Label } from 'reactstrap';
import { FaRegCheckCircle } from 'react-icons/fa'

class GetOffer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: false
        }
    }

    handleClick = (e) => {
        console.log("clicked:", e);
        this.setState({
            buttonClicked: true
        })
        console.log("button: ", this.state.buttonClicked)
    }
    render() {
        const buttonClicked = this.state.buttonClicked;
        return (
            <div className='container'>
                <br /><br /><br />
                <div className='row'>
                    <div className='col-4'>
                        <h3>Ücretsiz fiyat teklifi al</h3>
                    </div>
                </div>
                {buttonClicked
                    ?
                    <div>
                        <h4 color="#006699"><FaRegCheckCircle />Fiyat teklifin başarıyla iletildi</h4>
                    </div>
                    :
                    <Form>
                        <FormGroup className='col-4'>
                            <Label for="exampleName">Ad Soyad</Label>
                            <Input type="name" name="name" id="exampleName" placeholder="ad soyad" />
                        </FormGroup>
                        <FormGroup className='col-4'>
                            <Label for="exampleEmail">E-posta</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="eposta" />
                        </FormGroup>
                        <Label className='col-4' for="exampleSelect">Cep telefonu</Label>

                        <div className='row'>
                            <FormGroup>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>+90</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="cepNo" name="cepNo" id="cepTelefonu" placeholder="cep no" />
                            </FormGroup>
                        </div>
                        <FormGroup className='col-4' >
                            <Label for="exampleSelect">Kişi başı bütçe</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>100</option>
                                <option>200</option>
                                <option>300</option>
                                <option>400</option>
                                <option>500</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className='col-4'>
                            <Label for="exampleSelect">Davetli sayısı</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className='col-4'>
                            <Label for="exampleText">Mesaj (opsiyonel)</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        <FormGroup check>
                            <Label className='col-4' check>
                                <Input type="checkbox" />{' '}
                                <u>Kullanıcı sözleşmesi</u> ve <u>pazarlama izni</u> metinlerini okudum ve kabul ediyorum
                        </Label>
                        </FormGroup>
                        <Button className='col-4' color='danger' onClick={this.handleClick}>Ücretsiz teklif al</Button>
                    </Form>
                }
            </div>
        );
    }
}

export default GetOffer;