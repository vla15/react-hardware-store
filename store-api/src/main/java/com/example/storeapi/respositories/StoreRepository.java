package com.example.storeapi.respositories;

import com.example.storeapi.models.Store;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface StoreRepository extends CrudRepository<Store, Long> {
    List<Store> findAll();
}
