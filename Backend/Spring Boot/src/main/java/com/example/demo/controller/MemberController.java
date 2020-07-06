package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.*;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.*;
import com.example.demo.service.MemberService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class MemberController {
	@Autowired
    private MemberRepository memberRepository;
	
	@Autowired
    private MemberService memberService;
	
	 @GetMapping("/members")
	    public List<Member> getAllMembers() {
	        return memberRepository.findAll();
	    }
	
	 @GetMapping("/members/{id}")
	    public ResponseEntity<Member> getMemberById(@PathVariable(value = "id") int memberId)
	        throws ResourceNotFoundException {
		 Member member = memberRepository.findById(memberId)
	          .orElseThrow(() -> new ResourceNotFoundException("Member not found for this id :: " + memberId));
	        return ResponseEntity.ok().body(member);
	    }
	 
	 @PostMapping("/members")
	    public Member createMember(@Valid @RequestBody Member member) {
	        return memberRepository.save(member);
	    }
	 
	 @PutMapping("/members/{id}")
	    public ResponseEntity<Member> updateMember(@PathVariable(value = "id") int memberId,
	         @Valid @RequestBody Member memberDetails) throws ResourceNotFoundException {
		 	Member member = memberRepository.findById(memberId)
	        .orElseThrow(() -> new ResourceNotFoundException("Member not found for this id :: " + memberId));
		 	
		 	member.setUsername(memberDetails.getUsername());
		 	member.setGender(memberDetails.getGender());
	        member.setPassword(memberDetails.getPassword());
	        member.setMem_type(memberDetails.getMem_type());
	    	member.setName(memberDetails.getName());
	        member.setAddr(memberDetails.getAddr());
	        member.setEmail(memberDetails.getEmail());
	        member.setContact(memberDetails.getContact());
	        member.setDob(memberDetails.getDob());	

	    	
	        final Member updatedMember = memberRepository.save(member);
	        return ResponseEntity.ok(updatedMember);
	    }
	 
	 @DeleteMapping("/members/{id}")
	    public Map<String, Boolean> deleteMember(@PathVariable(value = "id") int memberId)
	         throws ResourceNotFoundException {
		 	Member member = memberRepository.findById(memberId)
	       .orElseThrow(() -> new ResourceNotFoundException("Member not found for this id :: " + memberId));

		 	memberRepository.delete(member);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	        
	    }
	 
	 @GetMapping("/members/getValidMember")
		public Member getValidMember(@RequestParam(name="username")String username,@RequestParam(name="password")String password)
		{
			System.out.println(username +" "+ password);
			return memberService.getValidMember(username,password);
		}
}
