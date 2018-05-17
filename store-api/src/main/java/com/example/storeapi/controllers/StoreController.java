package com.example.storeapi.controllers;

import com.example.storeapi.models.Store;
import com.example.storeapi.respositories.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class StoreController {

    @Autowired
    private StoreRepository storeRepository;

    @GetMapping("/")
    public String getInitial() {
        return "Arrived";
    }

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
