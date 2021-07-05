<%@page import="com.ptsd.mvc.product.ProductDto"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml"%>
<%@ page session="true" %>
<% String userseq = (String) session.getAttribute("userid"); %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>찜하기 목록</title>
</head>
<body>
	<h2>찜한 공연</h2>
	<table border="1">
		<tr>
			<th>이름</th>
			<th>주소</th>
			<th>사진</th>
			<th>전화번호</th>
			<th></th>
		</tr>
		<c:choose>
			<c:when test="${map.count == 0 }">
				----------찜한 공연이 없습니다----------
			</c:when>
			<c:otherwise>
				<c:forEach items="${map.list }" var="row" varStatus="status">
					<tr>
						<td>${row.productname }</td>
						<td>${row.address }</td>
						<td><img src="${row.thumbimg }">
						<td>${row.tellnumber}</td>
						<td><a href="wishDelete.do?wishseq=${row.wishseq}">[삭제]</a></td>
					</tr>
				</c:forEach>
			</c:otherwise>
		</c:choose>
	</table>
</body>
</html>