//in this components wi will use, grid fluid from bootstrap, import only the container element, then we will use the carousel to slide the testimonials
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

var testimonialsData = [
  {
    id: 1,
    name: 'John Wills',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.',
    designation: 'Manager'
  },
  {
    id: 2,
    name: 'Jasmine Perry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!',
    designation: 'Accountant'
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?',
    designation: 'CEO'
  }
]

export const Testimonials = () => {
  return (
    <section id='testimonials' className="testimonials-block">
      <Container fluid>
        <div className='title-holder'>
          <h2>Testimonials</h2>
          <div className='subtitle'>What client says about us</div>
        </div>
        {/* we add the testimonials into a bootstrap carousel */}
        <Carousel controls={false}>
          {
            testimonialsData.map( testimonials => (
              <Carousel.Item key={testimonials.id}>
                <blockquote>
                  <p>{testimonials.description}</p>
                  <cite>
                    <span className='name'>{testimonials.name}</span>
                    <span className='designation'>{testimonials.designation}</span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </Container>
    </section>
  )
}
