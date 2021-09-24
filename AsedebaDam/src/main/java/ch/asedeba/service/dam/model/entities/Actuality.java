package ch.asedeba.service.dam.model.entities;


import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


/**
 * 
 * @Author <a href="pDjomo@hamilton-medical.com">Patrick Djomo</a>
 *
 */

@Entity
@Table(name = "Actuality")
public class Actuality {


  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @NotNull
  @Column(name = "Title")
  private String title;

  @NotNull
  @Column(name = "CreatedOn")
  private Date createdOn;

  @NotNull
  @Column(name = "Description")
  private String description;

  @NotNull
  @Column(name = "ImgPath")
  private String imgPath;

  @NotNull
  @Column(name = "FullUrl")
  private String fullUrl;

  @NotNull
  @Column(name = "TotalClicked")
  private int totalClicked;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Date getCreatedOn() {
    return createdOn;
  }

  public void setCreatedOn(Date createdOn) {
    this.createdOn = createdOn;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getImgPath() {
    return imgPath;
  }

  public void setImgPath(String imgPath) {
    this.imgPath = imgPath;
  }

  public String getFullUrl() {
    return fullUrl;
  }

  public void setFullUrl(String fullUrl) {
    this.fullUrl = fullUrl;
  }

  public int getTotalClicked() {
    return totalClicked;
  }

  public void setTotalClicked(int totalClicked) {
    this.totalClicked = totalClicked;
  }



}
