import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  author: '',
  actions:{
    addBook(){
      this.onSubmit(this.get('title'),this.get('resume'));
    }
  }
});
