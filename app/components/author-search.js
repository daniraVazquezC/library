import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  results: '',
  actions:{
    getWord(){
      let name = this.get('author');
      let authorSearch = this.get('search');
      authorSearch(name).then((results)=> this.set('results',results))
      

    }
  }

});
