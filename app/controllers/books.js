import Controller from '@ember/controller';
export default Controller.extend({
  
  
  actions:{
    addBook(){
      let newBook = this.store.createRecord('book', this);
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
