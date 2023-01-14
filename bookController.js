
const BookModel = require("./BookModel")
// controllers
const handleViewBook =(req, res)=>{
    // const Books = BookModel.all();
const {id} = req.params;

  if(id){
    BookModel.find({_id:id}).then(books=>{
      res.json({ data:books})
        }).catch( err => console.log(err))
  } 
  else{
    BookModel.find().then(books=>{
      res.json({message: "All Books", data:books})
        }).catch( err => console.log(err))
  }
  // res.json({warning: "Book does not exist"})
  }


  const handleCreateBook =(req, res)=>{
      const {title, author, description} = req.body;
      const book = new BookModel({title, author, description});
  
      book.save().then(comment=>{
        res.json({message: "Congratulations!! your book is created successfully", data: comment});
      }).catch(error=>console.log(error));
     
  }



  const handleUpdateBook =(req, res)=>{
      const {id, title, author, description} = req.body;
      
      BookModel.findOneAndUpdate(id).then(Book =>{
        if(Book){
          Book.title = title;
          Book.author= author;
          Book.description=description;
          
        
          Book.save();
          res.json({message: "update is successful", data: Book});
        }
        res.json({message: "Book cannot be found"});
      }).catch(err=>
        console.log(err)
  );



      // const UpdateBook = BookModel.update({name, location, branch, phone, address, accountNumber})
      // res.json({message: "update successfully"})
  }

  const handleDeleteBook =(req, res)=>{
      const {id} = req.body;
       BookModel.findByIdAndDelete(id).then(deleteBook =>{
        if(deleteBook){
          res.json({message: "Book has been deleted successfully", data: deleteBook});
          return;
        }
        res.json({message: "Book has been already deleted"})
       });
     
  }










  
   module.exports = {
    handleCreateBook,
  handleDeleteBook,
    handleViewBook,
    handleUpdateBook
    
   }
