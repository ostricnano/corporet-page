//for this component we will use grid, open bootstrap, go to grid, then to fluid containar, and card component from bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: './images/blog1.jpg',
    time: '15 Nov 2016',
    title: 'Coffee Lovers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: './images/blog2.jpg',
    time: '10 Nov 2016',
    title: 'Tips for UI Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: './images/blog3.jpg',
    time: '07 Nov 2016',
    title: 'Beautiful Day',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.twitter.com'
  }
]

export const Blog = () => {
  return (
    <section id='blog' className='block block-blog'>
      <Container fluid>
        <div className='title-holder'>
          <h2>LATEST FROM BLOG</h2>
          <div className='subtitle'>get our latest news from blog</div>
        </div>
        <Row>
          {
            blogData.map( blog => (
              <Col sm={4} key={blog.id}>
                <Card>
                  <Card.Img variant="top" src={blog.image} />
                  <Card.Body>
                    <time>{blog.time}</time>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>
                      {blog.description}
                    </Card.Text>
                    <a href={blog.link} className='btn btn-primary'>
                      Read More<i className='fas fa-chevron-right' />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}
