$(function(){

	chkProductAreaCode();
	
})

// 상품정보 전체인지 아니면 특정지역인지 체크
function chkProductAreaCode() {
	
	var area = document.getElementsByName("productareaCode")[0];
	var idx = area.selectedIndex;
	var areacode = area.options[idx].value;
	
	if (areacode == 0) {
		getProductAllList();
	} else {
		getProductList(areacode);
	}
	
}

//모든 지역의 상품 정보
function getProductAllList() {
	
	$("#partylist").children().remove();

	const arrCode = [1, 31, 2, 34, 33, 3, 8, 32, 38, 37, 5, 7, 4, 36, 35, 6, 39];
	
	const partylist = document.querySelector('#partylist');
	
	const table = document.createElement('table');
	table.setAttribute("border","1");
	
	const tr = document.createElement('tr');
	const th1 = document.createElement('th');
	th1.append("상품번호");
	const th2 = document.createElement('th');
	th2.append("카테고리");
	const th3 = document.createElement('th');
	th3.append("상품명");
	const th4 = document.createElement('th');
	th4.append("시작일");
	const th5 = document.createElement('th');
	th5.append("종료일");
	const th6 = document.createElement('th');
	th6.append("이미지");
	const th7 = document.createElement('th');
	th7.append("지역번호");
	const th8 = document.createElement('th');
	th8.append("주소");
	const th9 = document.createElement('th');
	th9.append("전화번호");
	const th10 = document.createElement('th');
	th10.append("관람시간");
	const th11 = document.createElement('th');
	th11.append("관람등급");
	const th12 = document.createElement('th');
	th12.append("관객수");
	const th13 = document.createElement('th');
	th13.append("티켓가격");
	const th14 = document.createElement('th');
	th14.append("좋아요수");
	const th15 = document.createElement('th');
	th15.append("찜하기수");
	const th16 = document.createElement('th');
	th16.append("조회수");
	const th17 = document.createElement('th');
	th17.append("관리");
	const th18 = document.createElement('th');
	th18.append("찜하기");
	tr.append(th1);
	tr.append(th2);
	tr.append(th3);
	tr.append(th4);
	tr.append(th5);
	tr.append(th6);
	tr.append(th7);
	tr.append(th8);
	tr.append(th9);
	tr.append(th10);
	tr.append(th11);
	tr.append(th12);
	tr.append(th13);
	tr.append(th14);
	tr.append(th15);
	tr.append(th16);
	tr.append(th17);
	tr.append(th18);
	table.append(tr);
	
	for (var i = 0; i < arrCode.length; i++) {
		
		var areacode = arrCode[i];
		
		(function(){
			
			$.ajax({
				url: "getProductList.do?areacode="+areacode,
				method: "post",
				contentType : "application/json",
				dataType: "json",
				async:false,
				success:function(data) {
					console.log(data)
					for (var i = 0; i < data.length; i++) {
						
						const tr = document.createElement('tr');
						
						const productseq = document.createElement('td');
						productseq.append(data[i].productseq);
						const category = document.createElement('td');
						category.append(data[i].category);
						const productname = document.createElement('td');
						productname.append(data[i].productname);
						const startdate = document.createElement('td');
						startdate.append(data[i].startdate);
						const enddate = document.createElement('td');
						enddate.append(data[i].enddate);
						const thumbimg = document.createElement('td');
						const img = document.createElement('img');
						img.src = data[i].thumbimg;
						img.style.witdh = "3em";
						img.style.height = "3em";
						thumbimg.append(img);
						const areacode = document.createElement('td');
						areacode.append(data[i].areacode);
						const address = document.createElement('td');
						address.append(data[i].address);
						const tellnumber = document.createElement('td');
						tellnumber.append(data[i].tellnumber);
						const runtime = document.createElement('td');
						runtime.append(data[i].runtime);
						const rating = document.createElement('td');
						rating.append(data[i].rating);
						const seatcount = document.createElement('td');
						seatcount.append(data[i].seatcount);
						const price = document.createElement('td');
						price.append(data[i].price);
						const likecount = document.createElement('td');
						likecount.append(data[i].likecount);
						const wishcount = document.createElement('td');
						wishcount.append(data[i].wishcount);
						const productcount = document.createElement('td');
						productcount.append(data[i].productcount);
						
						const edit = document.createElement('td');
						
						const update = document.createElement('input');
						update.setAttribute("type","button");
						update.setAttribute("value","수정");
						update.setAttribute("onclick","location.href='productupdate.do?productseq="+data[i].productseq+"'");

						const del = document.createElement('input');
						del.setAttribute("type","button");
						del.setAttribute("value","삭제");
						del.setAttribute("onclick","productdelCon("+data[i].productseq+");");
						edit.append(update);
						edit.append(del);
						
						const insert = document.createElement('td');
						const wishinsert = document.createElement('form');
						wishinsert.setAttribute("name","form1");
						wishinsert.setAttribute("method","Post");
						wishinsert.setAttribute("action","wishInsert.do");
						
						const input01 = document.createElement('input');
						input01.setAttribute("type","hidden");
						input01.setAttribute("name","productseq");
						input01.setAttribute("value","data[i].productseq")
						
						const input02 = document.createElement('input');
						input02.setAttribute("type","button");
						input02.setAttribute("value","찜하기");
						insert.append(input02);
						
						const a = document.createElement('a');
						a.setAttribute("href","wishList.do");
						
						insert.append(a);
						
						
						tr.append(productseq);
						tr.append(category);
						tr.append(productname);
						tr.append(startdate);
						tr.append(enddate);
						tr.append(thumbimg);
						tr.append(areacode);
						tr.append(address);
						tr.append(tellnumber);
						tr.append(runtime);
						tr.append(rating);
						tr.append(seatcount);
						tr.append(price);
						tr.append(likecount);
						tr.append(wishcount);
						tr.append(productcount);
						tr.append(edit);
						tr.append(insert);

						table.append(tr);
						
					}
					partylist.append(table);

				},
				error:function() {
					alert("실패")
				}
				})
			
			
			
	})();
	
	}
	
}

// 해당 지역의 상품 정보
function getProductList(areacode) {
	
	$("#partylist").children().remove();

	$.ajax({
		url: "getProductList.do?areacode="+areacode,
		method: "post",
		contentType : "application/json",
		dataType: "json",
		success:function(data) {
			console.log(data)
			const partylist = document.querySelector('#partylist');
			
			const table = document.createElement('table');
			table.setAttribute("border","1");
			
			const tr = document.createElement('tr');
			const th1 = document.createElement('th');
			th1.append("상품번호");
			const th2 = document.createElement('th');
			th2.append("카테고리");
			const th3 = document.createElement('th');
			th3.append("상품명");
			const th4 = document.createElement('th');
			th4.append("시작일");
			const th5 = document.createElement('th');
			th5.append("종료일");
			const th6 = document.createElement('th');
			th6.append("이미지");
			const th7 = document.createElement('th');
			th7.append("지역번호");
			const th8 = document.createElement('th');
			th8.append("주소");
			const th9 = document.createElement('th');
			th9.append("전화번호");
			const th10 = document.createElement('th');
			th10.append("관람시간");
			const th11 = document.createElement('th');
			th11.append("관람등급");
			const th12 = document.createElement('th');
			th12.append("관객수");
			const th13 = document.createElement('th');
			th13.append("티켓가격");
			const th14 = document.createElement('th');
			th14.append("좋아요수");
			const th15 = document.createElement('th');
			th15.append("찜하기수");
			const th16 = document.createElement('th');
			th16.append("조회수");
			const th17 = document.createElement('th');
			th17.append("관리");
			const th18 = document.createElement('th');
			th18.append("찜하기");
			tr.append(th1);
			tr.append(th2);
			tr.append(th3);
			tr.append(th4);
			tr.append(th5);
			tr.append(th6);
			tr.append(th7);
			tr.append(th8);
			tr.append(th9);
			tr.append(th10);
			tr.append(th11);
			tr.append(th12);
			tr.append(th13);
			tr.append(th14);
			tr.append(th15);
			tr.append(th16);
			tr.append(th17);
			tr.append(th18);
			table.append(tr);
			
			for (var i = 0; i < data.length; i++) {
				
				const tr = document.createElement('tr');
				
				const productseq = document.createElement('td');
				productseq.append(data[i].productseq);
				const category = document.createElement('td');
				category.append(data[i].category);
				const productname = document.createElement('td');
				productname.append(data[i].productname);
				const startdate = document.createElement('td');
				startdate.append(data[i].startdate);
				const enddate = document.createElement('td');
				enddate.append(data[i].enddate);
				const thumbimg = document.createElement('td');
				const img = document.createElement('img');
				img.src = data[i].thumbimg;
				img.style.witdh = "3em";
				img.style.height = "3em";
				thumbimg.append(img);
				const areacode = document.createElement('td');
				areacode.append(data[i].areacode);
				const address = document.createElement('td');
				address.append(data[i].address);
				const tellnumber = document.createElement('td');
				tellnumber.append(data[i].tellnumber);
				const runtime = document.createElement('td');
				runtime.append(data[i].runtime);
				const rating = document.createElement('td');
				rating.append(data[i].rating);
				const seatcount = document.createElement('td');
				seatcount.append(data[i].seatcount);
				const price = document.createElement('td');
				price.append(data[i].price);
				const likecount = document.createElement('td');
				likecount.append(data[i].likecount);
				const wishcount = document.createElement('td');
				wishcount.append(data[i].wishcount);
				const productcount = document.createElement('td');
				productcount.append(data[i].productcount);
				
				const edit = document.createElement('td');
				
				const update = document.createElement('input');
				update.setAttribute("type","button");
				update.setAttribute("value","수정");
				update.setAttribute("onclick","location.href='productupdate.do?productseq="+data[i].productseq+"'");

				const del = document.createElement('input');
				del.setAttribute("type","button");
				del.setAttribute("value","삭제");
				del.setAttribute("onclick","productdelCon("+data[i].productseq+");");
				edit.append(update);
				edit.append(del);
				
				const insert = document.createElement('td');
				const wishinsert = document.createElement('form');
				wishinsert.setAttribute("name","form1");
				wishinsert.setAttribute("method","Post");
				wishinsert.setAttribute("action","wishInsert.do");
						
				const input01 = document.createElement('input');
				input01.setAttribute("type","hidden");
				input01.setAttribute("name","productseq");
				input01.setAttribute("value","+data[i].productseq+")
						
				const input02 = document.createElement('input');
				input02.setAttribute("type","button");
				input02.setAttribute("value","찜하기");
				insert.append(input02);
						
				const a = document.createElement('a');
				a.setAttribute("href","wishList.do");
				insert.append(a);
						

				tr.append(productseq);
				tr.append(category);
				tr.append(productname);
				tr.append(startdate);
				tr.append(enddate);
				tr.append(thumbimg);
				tr.append(areacode);
				tr.append(address);
				tr.append(tellnumber);
				tr.append(runtime);
				tr.append(rating);
				tr.append(seatcount);
				tr.append(price);
				tr.append(likecount);
				tr.append(wishcount);
				tr.append(productcount);
				tr.append(edit);
				tr.append(insert);

				table.append(tr);
				
			}
			partylist.append(table);
			

		},
		error:function() {
			alert("실패")
		}
		})
	
	
}

function productdelCon(productseq) {
	
	var con = confirm("해당 상품을 삭제하시겠습니까?");
	
	if(con) {
		location.href="productdelete.do?productseq="+productseq;
	}
	
}