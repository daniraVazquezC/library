import DS from 'ember-data';
const { Model, belongsTo } = DS;

export default Model.extend({
  title: DS.attr(),
  resume: DS.attr(),
  author: belongsTo('author')
});
