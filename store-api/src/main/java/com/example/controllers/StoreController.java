package com.example.controllers;

import com.example.models.Store;
import com.example.respositories.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StoreController {

    @Autowired
    private StoreRepository storeRepository;

    @GetMapping("/store")
    public Iterable<Store> findAllItems() {
        return storeRepository.findAll();
    }

    @PostMapping("/store")
    public Store addNewItem(@RequestBody Store storeItem) {
        return storeRepository.save(storeItem);
    }

    @DeleteMapping("/store/{itemId}")
    public HttpStatus deleteItem(@PathVariable Long itemId) {
        storeRepository.delete(itemId);
        return HttpStatus.OK;
    }
}
