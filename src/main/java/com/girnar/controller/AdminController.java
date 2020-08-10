package com.girnar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.girnar.model.Tutorial;
import com.girnar.service.IAdminService;

@Controller
@RequestMapping(value = "/admin")
public class AdminController {

	@Autowired
	IAdminService adminService;
	
	
	@RequestMapping(value = "/camerabasic", method = RequestMethod.GET)
	String getCamerBasic() {
		
		return "managecamerabasic";

	}
	
	
	@RequestMapping(value = "/camerabasic", method = RequestMethod.POST)
	String getCamerBasic(Tutorial tutorial) {
		
		adminService.addTutorial(tutorial);
		return "managecamerabasic";

	}

}
