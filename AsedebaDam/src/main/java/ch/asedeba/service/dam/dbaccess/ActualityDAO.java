package ch.asedeba.service.dam.dbaccess;

import java.util.List;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import ch.asedeba.service.dam.model.entities.Actuality;

/**
 * 
 * @Author <a href="pDjomo@hamilton-medical.com">Patrick Djomo</a>
 *
 */
@Repository
public class ActualityDAO {


  @Autowired
  private SessionFactory sessionFactory;



  public boolean saveActuality(Actuality actuality) {

    Session session = sessionFactory.getCurrentSession();

    session.save(actuality);

    return true;

  }


  public List<Actuality> getActualities() {

    Session session = sessionFactory.getCurrentSession();

    CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();

    CriteriaQuery<Actuality> criteriaQuery = criteriaBuilder.createQuery(Actuality.class);

    Root<Actuality> root = criteriaQuery.from(Actuality.class);

    criteriaQuery.select(root);

    Query<Actuality> query = session.createQuery(criteriaQuery);

    return query.getResultList();

  }


}
