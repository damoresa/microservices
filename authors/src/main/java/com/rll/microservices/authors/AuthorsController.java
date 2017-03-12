package com.rll.microservices.authors;

import com.rll.microservices.authors.dao.AuthorDAO;
import com.rll.microservices.authors.model.Author;
import com.rll.microservices.common.model.authors.AuthorDTO;
import com.rll.microservices.common.model.authors.GetAuthorResponse;
import com.rll.microservices.common.model.authors.GetAuthorsResponse;
import com.rll.microservices.common.model.operations.OperationResponse;
import com.rll.microservices.common.utils.CommonUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.data.domain.Example;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RefreshScope
@RestController
class AuthorsController {

    @Autowired
    private AuthorDAO authorDAO;

    private AuthorDTO modelToDTO(Author author) {
        AuthorDTO authorDTO = new AuthorDTO();
        authorDTO.setAuthor_id(author.id);
        authorDTO.setAuthor_name(author.name);
        authorDTO.setAuthor_surname(author.lastname);

        return authorDTO;
    }

    private Author DTOToModel(AuthorDTO authorDTO) {
        Author author = new Author();
        author.id = authorDTO.getAuthor_id();
        author.name = authorDTO.getAuthor_name();
        author.lastname = authorDTO.getAuthor_surname();

        return author;
    }

    @RequestMapping(path = "/authors/init", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    void initAuthors() {

        Author author1 = new Author("1", "Daniel", "Amores");
        Author author2 = new Author("2", "Begoña", "Pacheco");

        authorDAO.save(Arrays.asList(author1, author2));
    }

    @RequestMapping(path = "/authors", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    GetAuthorsResponse getAuthors(
            @RequestParam(value = "author_name", required = false) String authorName,
            @RequestParam(value = "author_surname", required = false) String authorSurname) {

        GetAuthorsResponse response = new GetAuthorsResponse();
        List<AuthorDTO> authorDTOs = new ArrayList<AuthorDTO>();

        Author authorProbe = new Author();
        authorProbe.name = authorName;
        authorProbe.lastname = authorSurname;

        Example<Author> authorQuery = Example.of(authorProbe);

        List<Author> authors = authorDAO.findAll(authorQuery);

        for (Author author : authors)
        {
            authorDTOs.add(this.modelToDTO(author));
        }

        if (!authorDTOs.isEmpty())
        {
            response.setResult(authorDTOs);
        }
        else
        {
            CommonUtils.generateError(response, "AUTHORS_GETLIST_001", "Unable to retrieve authors");
        }

        return response;
    }

    @RequestMapping(path = "/authors", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    OperationResponse createAuthor(@RequestBody AuthorDTO author) {
        OperationResponse response = new OperationResponse();

        try
        {
            Author authorEntity = this.DTOToModel(author);
            authorDAO.insert(authorEntity);

            CommonUtils.generateSuccess(response, "Author successfully persisted");
        }
        catch (Exception ex)
        {
            CommonUtils.generateError(response, "AUTHORS_INSERT_001", "Unable to persist author: " + ex.getMessage());
        }

        return response;
    }

    @RequestMapping(path = "/authors", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    OperationResponse updateAuthor(@RequestBody AuthorDTO author) {
        OperationResponse response = new OperationResponse();

        try
        {
            Author authorEntity = this.DTOToModel(author);
            authorDAO.save(authorEntity);

            CommonUtils.generateSuccess(response, "Author successfully updated");
        }
        catch (Exception ex)
        {
            CommonUtils.generateError(response, "AUTHORS_UPDATE_001", "Unable to update author: " + ex.getMessage());
        }

        return response;
    }

    @RequestMapping(path = "/authors/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    GetAuthorResponse getAuthor(@PathVariable("id") String id) {

        GetAuthorResponse response = new GetAuthorResponse();

        Author author = authorDAO.findOne(id);

        if (author != null)
        {
            AuthorDTO authorDTO = this.modelToDTO(author);
            response.setResult(authorDTO);
        }
        else
        {
            CommonUtils.generateError(response, "AUTHORS_GETSINGLE_001", "Unable to retrieve author");
        }

        return response;
    }

    @RequestMapping(path = "/authors/{id}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    OperationResponse deleteAuthor(@PathVariable("id") String id) {
        OperationResponse response = new OperationResponse();

        try
        {
            authorDAO.delete(id);

            CommonUtils.generateSuccess(response, "Author successfully deleted");
        }
        catch (Exception ex)
        {
            CommonUtils.generateError(response, "AUTHORS_DELETE_001", "Unable to delete author: " + ex.getMessage());
        }

        return response;
    }
}