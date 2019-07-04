export default function() {
  this.namespace = '/api';

  let books = [{
        type: 'book',
        id: 'rental1',
        attributes: {
          title: 'Grand Old Mansion',
          author: 'Veruca Salt',
          resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum eleifend mi vitae venenatis. Ut at urna eu justo posuere ultrices. Donec ultricies ante turpis, id egestas enim fermentum dignissim.'
        }
      },  {
        type: 'book',
        id: 'rental2',
        attributes: {
          title: 'Downtown Charm',
          author: 'Violet Beauregarde',
          resume: 'Fusce in diam tristique, imperdiet odio in, auctor orci. Curabitur sed molestie arcu, a fermentum orci. Morbi vel lacinia nunc.'
        }
      }]

  this.get('/books', function() {
    return { data: books };
  });

  this.get('/books/:id', function (db, request) {
    return { data: books.find((book) => request.params.id === book.id) };
  });

  this.post('/books', function( schema, request){
    const attrs= JSON.parse(request.requestBody).book;
    return schema.books.create(attrs);
  });
}