package gruppe4.tessera.service;

import org.springframework.stereotype.Service;

import gruppe4.tessera.model.Transaction;
import gruppe4.tessera.repository.TransactionRepository;

@Service
public class TransactionService {
    
    private TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public Iterable<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public Boolean saveTransaction(Transaction transaction){
        transactionRepository.save(transaction);
        return true;
    }
}
