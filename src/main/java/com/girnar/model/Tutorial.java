package com.girnar.model;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;


@Entity
public class Tutorial {

	
	private int id;
	
	private String camerabasic;

	@Id
	@GeneratedValue
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
	public String getCamerabasic() {
		return camerabasic;
	}

	public void setCamerabasic(String camerabasic) {
		this.camerabasic = camerabasic;
	}
	
	
	
}
