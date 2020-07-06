package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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

import com.example.demo.entity.HResults;
import com.example.demo.entity.Member;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.HResultsRepository;
import com.example.demo.service.HResultsService;
import com.example.demo.service.HResultsServiceImpl;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class HResultsController {
	@Autowired
	private HResultsRepository hrr;
	
	private HResultsService hr;
        
    @GetMapping("/hresults")
    public List<HResults> getAllHResults() {
        return hrr.findAll();
    }

    @GetMapping("/hresults/{id}")
    public ResponseEntity<HResults> getHResultsById(@PathVariable(value = "id") int hresultsId)
        throws ResourceNotFoundException {
    	HResults hresults = hrr.findById(hresultsId)
          .orElseThrow(() -> new ResourceNotFoundException("hresults not found for this id :: " + hresultsId));
        return ResponseEntity.ok().body(hresults);
    }
    
	/*
	 * @GetMapping("/hresults/m") public HResults getValidResult(@RequestParam(name=
	 * "mid") Integer mhresultsId) {
	 * 
	 * System.out.println(mhresultsId); HResults mhresults =
	 * hr.getValidResults(mhresultsId);
	 * 
	 * //Optional<HResults> mhresults = hrr.findOneByName(mhresultsId); //HResults
	 * mhresults = hrr.findById(mhresultsId) //.orElseThrow(() -> new
	 * ResourceNotFoundException("Mhresults not found for this id :: " +
	 * mhresultsId)); System.out.println(mhresults); return mhresults; }
	 */
    
    @PostMapping("/hresults")
    public HResults createHResults(@Valid @RequestBody HResults hresults) {
        return hrr.save(hresults);
    }

    @PutMapping("/hresults/{id}")
    public ResponseEntity<HResults> updateHResults(@PathVariable(value = "id") int hresultsId,
         @Valid @RequestBody HResults hresultsDetails) throws ResourceNotFoundException {
    	HResults hresults = hrr.findById(hresultsId)
        .orElseThrow(() -> new ResourceNotFoundException("results not found for this id :: " + hresultsId));

    	hresults.setHeight(hresultsDetails.getHeight());
    	hresults.setWeight(hresultsDetails.getWeight());
    	hresults.setDate(hresultsDetails.getDate());  
    	hresults.setBmi(hresultsDetails.getBmi());
    	hresults.setHealthProblem(hresultsDetails.getHealthProblem());
   	
        final HResults updatedHResults = hrr.save(hresults);
        return ResponseEntity.ok(updatedHResults);
    }

    @DeleteMapping("/hresults/{id}")
    public Map<String, Boolean> deleteHResults(@PathVariable(value = "id") int hresultsId)
         throws ResourceNotFoundException {
    	HResults hresults = hrr.findById(hresultsId)
       .orElseThrow(() -> new ResourceNotFoundException("results not found for this id :: " + hresultsId));

        hrr.delete(hresults);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    
    @GetMapping("/hresults/getResult")
	public HResults getResults(@RequestParam(name="mid")Integer mid)
	{
		System.out.println(mid);
		return hr.getResults(mid);
	}
}
