import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return[{
      id: '1',
      title: 'Grand Old Mansion',
      author: 'Veruca Salt',      
      resume: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    },
    {
      id: '2',
      title: 'Grand Old Mansion',
      author: 'Veruca Salt',      
      resume: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }]
  }
});
