package ch.asedeba.service.rest.v1.api;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ch.asedeba.service.dam.adapter.ActualityManager;
import ch.asedeba.service.dam.model.dtos.ActualityDTO;

/**
 * REST API for testing rest api
 * 
 * 
 * @Author <a href="pDjomo@hamilton-medical.com">Patrick Djomo</a>
 * 
 */
@CrossOrigin
@RestController
@RequestMapping("/rest/api/v1/test")
public class TestRestController {


  @Autowired
  private ActualityManager actualityManager;


  /**
   * Returns ciao
   *
   * @return 200 OK String
   */
  @GetMapping("/ciao")
  public String getTest() {
    return "ciao";
  }



  /**
   * Returns ciao
   *
   * @return 200 OK String
   */
  @GetMapping("/actualities")
  public List<ActualityDTO> getActualities() {

    return actualityManager.getActualities();

  }

}
