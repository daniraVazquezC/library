import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({ 
  author : '', 
  actions:{
    addBook(title,resume){
      const store = this.get('store');
      const author = store.peekRecord('author', $('#author').val())
      //this.set('author',$('#author').val());

      let newBook = store.createRecord('book', {title: title , resume: resume, author: author});
      newBook.save();
    },
    searchAuthor(param){
      if(param !== ''){
        return this.get('store').query('author',{author: param})    
      }else{
        return this.get('store').findAll('author')
      }
      
    }
  }
});
