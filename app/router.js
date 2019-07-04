import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
   this.route('book', function() {
     this.route('show',{ path: '/:book_id'});
     this.route('update');
   });
  this.route('books');
});

export default Router;
