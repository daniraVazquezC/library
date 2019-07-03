import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  resume: DS.attr()
});
