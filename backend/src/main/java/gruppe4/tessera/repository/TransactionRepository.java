package gruppe4.tessera.repository;

import org.springframework.data.repository.CrudRepository;
import gruppe4.tessera.model.Transaction;

public interface TransactionRepository extends CrudRepository<Transaction, Integer> {
    
}
