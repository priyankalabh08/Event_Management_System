package com.girnar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class SiteController {
	
	
	@RequestMapping(value="index",method=RequestMethod.GET)
	String getIndex(){
		return "index";
	}

	
	@RequestMapping(value="about",method=RequestMethod.GET)
	String getAbout(){
		return "about";
	}

	
	@RequestMapping(value="services",method=RequestMethod.GET)
	String getServices(){
		return "services";
	}

	@RequestMapping(value="contact",method=RequestMethod.GET)
	String getContact(){
		return "contact";
	}
	

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	String getLogin(String id) {

		return "login";
	}

	
	


	@RequestMapping(value = "/camerabasic", method = RequestMethod.GET)
	ModelAndView getcamerabasic() {
			String content="<span style=color:red>Test</span>";
		return new ModelAndView("camerabasic","content",content);
	}

	
	@RequestMapping(value = "/dashboard", method = RequestMethod.GET)
	String getDashboard() {

		return "dashboard";
	}


}
