package com.girnar.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import com.girnar.dao.IAdminDAO;
import com.girnar.model.Tutorial;
import com.girnar.service.IAdminService;

public class AdminServiceImpl implements IAdminService{

	@Autowired
	IAdminDAO adminDAO;
	
	@Override
	@Transactional
	public void addTutorial(Tutorial tutorial) {
		adminDAO.addTutorial(tutorial);
		
	}

}
