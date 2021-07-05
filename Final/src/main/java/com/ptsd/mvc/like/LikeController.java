package com.ptsd.mvc.like;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ptsd.mvc.user.UserDto;

@Controller
public class LikeController {

	private LikeBiz biz;
	
	@ResponseBody
	@RequestMapping(value = "/like.do", method = RequestMethod.POST)
	public int likeCnt(Model model, HttpServletRequest request) {
		
		int likeseq = Integer.parseInt(request.getParameter("like"));
		int productseq = Integer.parseInt(request.getParameter("productseq"));
		int userseq = ((UserDto) request.getSession().getAttribute("login")).getUserseq();
		
		LikeDto dto = new LikeDto();
		
		dto.setProductseq(productseq);
		dto.setUserseq(userseq);
		
		if (likeseq >= 1) {
			biz.likeDel(dto);
			biz.likeUpdate(productseq);
			likeseq = 0;
		} else {
			biz.likeInsert(dto);
			biz.likeUpdate(productseq);
			likeseq = 1;
		}
		
		return likeseq;
	}
}