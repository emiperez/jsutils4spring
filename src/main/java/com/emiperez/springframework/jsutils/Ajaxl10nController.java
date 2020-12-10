package com.emiperez.springframework.jsutils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.NoSuchMessageException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Ajaxl10nController {

	@Autowired
	private MessageSource messageSource;
	
	@GetMapping("/get-localized-message/{code}")
	@ResponseBody
	public String getMessage(@PathVariable String code) {
		try {
			return messageSource.getMessage(code, null, null);
		} catch (NoSuchMessageException e) {
			return code;
		}
		
	}
}
