package com.rll.microservices.front;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

public class FrontController {

    @RequestMapping(path = "/", method = RequestMethod.GET)
    ModelAndView serveAngular2() {

        ModelAndView mav = new ModelAndView("index.html");

        return mav;
    }
}
