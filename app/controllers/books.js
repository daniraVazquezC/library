import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    addBook(){
      
      console.log(this)
      let newBook = this.store.createRecord('book', this);
      newBook.save();
    }
  }
});
