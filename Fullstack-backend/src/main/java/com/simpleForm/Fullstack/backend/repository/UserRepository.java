package com.simpleForm.Fullstack.backend.repository;

import com.simpleForm.Fullstack.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

//Ctrl + click on jparepository
public interface UserRepository extends JpaRepository<User,Long>  {

}
