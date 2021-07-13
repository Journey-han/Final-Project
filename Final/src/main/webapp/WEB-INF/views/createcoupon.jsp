<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PTSD / 쿠폰생성</title>
</head>
<body>
	<%@include file="./common.jsp"%>


	<form action="createcoupon.do" class="form-horizontal">
		<input type="hidden" name="userseq" value="${login.userseq }">
		<div class="form-group">

			<label for="coupontitle" class="col-sm-2 control-label">쿠폰명</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" name="coupontitle"
					id="coupontitle" placeholder="쿠폰명을 입력하세요">
			</div>
		</div>
		<div class="form-group">
			<label for="discount" class="col-sm-2 control-label"> 금액선택 </label>
			<div class="col-sm-10">
				<select class="form-control" name="discount" id="discount">
					<option value="10000">10000원</option>
					<option value="5000">5000원</option>
					<option value="2000">2000원</option>
				</select>
			</div>
		</div>

		<div class="form-group">
			<label for="endday" class="col-sm-2 control-label"> 쿠폰 만료일 </label>
			<div class="col-sm-10">
				<input type="date" class="form-control" name="endday" id="endday">
			</div>
		</div>
		<div class="form-group">
		<div class="col-sm-offset-2 col-sm-10">
		<button type="submit" class="btn btn-danger">생성하기</button>
		</div>
		</div>
	</form>

</body>
</html>