import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('library');

  this.route('book', function() {
    this.route('show');
    this.route('update');
  });
});

export default Router;
