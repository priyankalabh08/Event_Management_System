package com.girnar.dao.impl;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.girnar.dao.IAdminDAO;
import com.girnar.model.Tutorial;

public class AdminDAOImpl implements IAdminDAO {
	@Autowired
	SessionFactory sessionFactory;

	@Override
	public void addTutorial(Tutorial tutorial) {
		sessionFactory.getCurrentSession().save(tutorial);

	}

}
