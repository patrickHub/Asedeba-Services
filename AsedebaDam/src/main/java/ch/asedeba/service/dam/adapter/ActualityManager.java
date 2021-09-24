package ch.asedeba.service.dam.adapter;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.annotation.RequestScope;
import ch.asedeba.service.dam.dbaccess.ActualityDAO;
import ch.asedeba.service.dam.model.dtos.ActualityDTO;
import ch.asedeba.service.dam.model.entities.Actuality;

/**
 * 
 * @Author <a href="pDjomo@hamilton-medical.com">Patrick Djomo</a>
 *
 */

@Component
@RequestScope
public class ActualityManager {


  @Autowired
  private ActualityDAO actualityDAO;


  @Transactional
  public List<ActualityDTO> getActualities() {

    List<ActualityDTO> result = new ArrayList<>();

    for (Actuality actuality : actualityDAO.getActualities()) {

      result.add(DbToDtoMapper.mapActualityToDto(actuality));

    }

    return result;

  }


}
