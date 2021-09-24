package ch.asedeba.service.dam.adapter;

import java.text.SimpleDateFormat;
import java.util.Objects;
import ch.asedeba.service.dam.model.dtos.ActualityDTO;
import ch.asedeba.service.dam.model.entities.Actuality;

/**
 * 
 * @Author <a href="pDjomo@hamilton-medical.com">Patrick Djomo</a>
 *
 */
public class DbToDtoMapper {



  private DbToDtoMapper() {}


  /**
   * 
   * Method to map mobileAppUser entity into mobileAppUser Dto
   * 
   * @param  actuality mobileAppUser entity
   * 
   * @return           mobileAppUserDto
   * 
   */
  public static ActualityDTO mapActualityToDto(Actuality actuality) {

    if (Objects.isNull(actuality)) {
      return null;
    }

    ActualityDTO actualityDTO = new ActualityDTO();

    actualityDTO.setId(actuality.getId());
    actualityDTO.setTitle(actuality.getTitle());

    SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd");
    actualityDTO.setCreatedOn(format.format(actuality.getCreatedOn()));
    actualityDTO.setDescription(actuality.getDescription());
    actualityDTO.setImgPath(actuality.getImgPath());
    actualityDTO.setFullUrl(actuality.getFullUrl());
    actualityDTO.setTotalClicked(actuality.getTotalClicked());

    return actualityDTO;

  }

}
