//for this component we will use grid, open bootstrap, go to grid, then to fluid containar and the pagination component from bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

interface WorksData {
  id: number,
  link: string,
  image: string,
  title: string,
  subtitle: string
}

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const Works: React.FC<{ data: WorksData[] }> = ({ data }) => {

  return (
    <section id='works' className='block works-block'>
      <div className='title-holder'>
        <h2>Our works</h2>
        <div className='subtitle'>Our awsome works</div>
      </div>
      <Container fluid>
        <Row className='portfoliolist'>
          {data.map((works) => (
            <Col sm={4} key={works.id}>
              <div className='portfolio-wrapper'>
                <a href={works.link}>
                  <Image src={works.image} />
                  <div className='label text-center'>
                    <h3>{works.title}</h3>
                    <p>{works.subtitle}</p>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
        <Pagination>{items}</Pagination>
      </Container>
    </section>
  )
}
export default Works
