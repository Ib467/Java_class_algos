package com.indika.dbdemo.controllers;

import java.util.List;

//import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.indika.dbdemo.models.Language;
import com.indika.dbdemo.services.BookService;

@RestController
public class BooksApi {

		private final BookService bookService;
		
		public BooksApi(BookService bookService) {
			this.bookService = bookService;
		}
		

		
		
		@RequestMapping("/api/languages")
		public List<Language> index(){
			return bookService.getAllBooks();
		}
		
		//CREATING A BOOK 
		@PostMapping("/api/languages")
	    public Language create(@RequestParam(value="name") String name, 
	    					@RequestParam(value="version") String desc, 
	    					@RequestParam(value="language") String lang, 
	    					@RequestParam(value="pages") Integer numOfPages) {
	        Language newBook = new Language(name, desc, lang, numOfPages);
	        return bookService.createBook(newBook);
	    }
		
		@RequestMapping("/api/languages/{id}")
	    public Language show(@PathVariable("id") Long id) {
	        Language book = bookService.getBookById(id);
	        return book;
	    }
		
		
		//updating a book
		@PutMapping("/api/languages/{id}")
	    public Language update(@PathVariable("id") Long id, 
	    					@RequestParam(value="name") String name, 
	    					@RequestParam(value="version") String desc, 
	    					@RequestParam(value="language") String lang, 
	    					@RequestParam(value="pages") Integer numOfPages) {
	        Language book = bookService.updateBook(id, name, desc, lang, numOfPages);
	        return book;
	    }
	    
		//deleting a book
		@DeleteMapping("/api/languages/{id}")
	    public void destroy(@PathVariable("id") Long id) {
	        languagesService.deleteLanguage(id);
	    }
		
		
		
		
		
}
	
    



CREATING A BOOK 
	@PostMapping("/api/languages")
   public Language create(@RequestParam(value="name") String name, 
   					@RequestParam(value="creator") String creator, 
   					@RequestParam(value="version") Integer version) { 
       Language lang = new Language(name, creator, version);
       return languageService.createLang(lang);
   }
	
	@RequestMapping("/api/languages/{id}")
   public Language show(@PathVariable("id") Long id) {
       Language lang = languageService.findLang(id);
       return lang;
   }
	
	
	//updating a book
	@PutMapping("/api/languages/{id}")
   public Language update(@PathVariable("id") Long id, 
   					@RequestParam(value="name") String name, 
   					@RequestParam(value="creator") String creator, 
   					@RequestParam(value="version") Integer version){
       Language lang = languageService.updateLang(id, name, creator, version);
       return lang;
   }
   
	
	//deleting a book
	@DeleteMapping("/api/languages/{id}")
   public void destroy(@PathVariable("id") Long id) {
		languageService.deleteLang(id);
