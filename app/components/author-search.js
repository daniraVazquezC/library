import Component from '@ember/component';
import $ from 'jquery';


export default Component.extend({
  tagName: '',
  results: '',
  willRender(){
    let authorSearch = this.get('search');
    authorSearch('').then((results)=> this.set('results',results))  
  },
  didRender(){
    $('#author').select2();
  },
  
  actions:{
    /*getWord(){
      let name = this.get('author');
      let authorSearch = this.get('search');
      authorSearch(name).then((results)=> this.set('results',results))    
    }*/

    
  }

});
