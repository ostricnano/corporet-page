
let cache = new Map();
console.log(cache,'cache')

export function fetchData () {
  
}
export async function getData(){
  return await getWorksData()
}

export async function getWorksData() {
  // Resuelve la promesa después de 6 segundos y devuelve los datos
  return new Promise(resolve => {
    setTimeout(() => {
      const worksData = [
        {
          id: 1,
          link: 'https://www.google.com',
          image: './images/img2.jpg',
          title: 'Lonely Path',
          subtitle: 'Web Design'
        },
        {
          id: 2,
          link: 'https://www.google.com',
          image: './images/img3.jpg',
          title: 'Photographer Girl',
          subtitle: 'Branding'
        },
        {
          id: 3,
          link: 'https://www.google.com',
          image: './images/img4.jpg',
          title: 'The Difference',
          subtitle: 'Web Design'
        },
        {
          id: 4,
          link: 'https://www.google.com',
          image: './images/img5.jpg',
          title: 'Nature Patterns',
          subtitle: 'Branding'
        },
        {
          id: 5,
          link: 'https://www.google.com',
          image: './images/img6.jpg',
          title: 'The Difference',
          subtitle: 'Photography'
        },
        {
          id: 6,
          link: 'https://www.google.com',
          image: './images/img7.jpg',
          title: 'Winter Sonata',
          subtitle: 'Web Design'
        },
        {
          id: 7,
          link: 'https://www.google.com',
          image: './images/img8.jpg',
          title: 'Lonely Path',
          subtitle: 'Branding'
        },
        {
          id: 8,
          link: 'https://www.google.com',
          image: './images/img9.jpg',
          title: 'Appreciation',
          subtitle: 'Photography'
        },
        {
          id: 9,
          link: 'https://www.google.com',
          image: './images/img2.jpg',
          title: 'Happy Days',
          subtitle: 'Web Design'
        }
      ];

      resolve(worksData); // Resuelve la promesa con los datos
    }, 6000); // Retraso de 6 segundos
  });
}

