import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


export const Contact = () => {
  return (
    <section id='contact' className="block contact-block">
      <Container fluid>
        <div className='title-holder'>
          <h2>Contact us</h2>
          <div className='subtitle'>get connected with us</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control placeholder="Enter your full name" required />
            </Col>
            <Col>
              <Form.Control type='email' placeholder="Email address" required />
            </Col>
            <Col>
              <Form.Control type='number' placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type='submit'>Submit</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.274565436!2d-58.515699806900045!3d-34.61579604820872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1714920557315!5m2!1ses!2sar"  loading="lazy"></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              hello@domain.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              000-000-0000
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              London, United Kingdom
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
