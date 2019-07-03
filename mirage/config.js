export default function() {
  this.namespace = '/api';

  this.get('/books', function() {
    return {
      data: [{
        type: 'book',
        id: '1',
        attributes: {
          title: 'Grand Old Mansion',
          author: 'Veruca Salt',
          resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum eleifend mi vitae venenatis. Ut at urna eu justo posuere ultrices. Donec ultricies ante turpis, id egestas enim fermentum dignissim.'
        }
      },  {
        type: 'book',
        id: '2',
        attributes: {
          title: 'Downtown Charm',
          author: 'Violet Beauregarde',
          resume: 'Fusce in diam tristique, imperdiet odio in, auctor orci. Curabitur sed molestie arcu, a fermentum orci. Morbi vel lacinia nunc.'
        }
      }]
    };
  });
}