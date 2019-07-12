import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  actions:{
    getWord(){
      let name = this.get('author');
      let authorSearch = this.get('search');
      authorSearch(name)
    }
  }

});
