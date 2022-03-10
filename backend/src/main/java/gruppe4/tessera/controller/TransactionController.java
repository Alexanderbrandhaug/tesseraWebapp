package gruppe4.tessera.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import gruppe4.tessera.model.Transaction;
import gruppe4.tessera.service.PostService;
import gruppe4.tessera.service.TransactionService;

@Controller
@RequestMapping(path = "/tessera/api")
@CrossOrigin("*")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private PostService postService;

    
    @GetMapping(path = "/transactions")
    public @ResponseBody Iterable<Transaction> getAllTransactions() {
        return transactionService.getAllTransactions();
    }

   

}
