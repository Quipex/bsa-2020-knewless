package com.knewless.core.article;

import com.knewless.core.article.dto.ArticleDto;
import com.knewless.core.article.dto.ArticleFullDto;
import com.knewless.core.security.oauth.UserPrincipal;
import com.knewless.core.user.model.CurrentUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/article")
public class ArticleController {
    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @PostMapping
    public ArticleDto saveArticle(@RequestBody ArticleDto article, @CurrentUser UserPrincipal userPrincipal) {
        return articleService.saveArticle(article, userPrincipal.getId());
    }
    @GetMapping("/{id}")
    public ArticleFullDto getArticle(@PathVariable UUID id){
        return articleService.getArticle(id);
    }


}
