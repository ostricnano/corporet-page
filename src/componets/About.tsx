import { Container, Col, Row, Image, ProgressBar } from 'react-bootstrap'


export const About = () => {
  const html = 60
  const responsive = 95
  const photoshop = 60
  return (
    <section id='about' className='about-block'>
      <Container fluid>
        <div className='title-holder'>
          <h2>About us</h2>
          <div className='subtitle'>
            learn more about us
          </div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src='/images/img1.jpg'/>
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.
            </p>
            <div className='progress-block'>
              <h4>HTML / CSS / JAVASCRIPT</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>HTML / CSS / JAVASCRIPT</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className='progress-block'>
              <h4>HTML / CSS / JAVASCRIPT</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
