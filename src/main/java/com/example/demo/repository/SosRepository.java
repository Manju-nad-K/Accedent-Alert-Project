package com.example.demo.repository;



import org.springframework.data.jpa.repository.JpaRepository;




import com.example.demo.entity.SosRequest;

public interface SosRepository extends JpaRepository<SosRequest, Long> {
	SosRequest findTopByOrderByCreatedAtDesc();

}