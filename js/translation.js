const translations = {
    korean: {
      title: "저희 결혼식에 <span class=\"mobile-break\">초대합니다.</span>",
      names: "Nhu Minh & Trinh Phuong",
      namegroom: "Nhu Minh",
      namebride: "Trinh Phuong",
      eventdate: "2024년 11월 10일 (일요일)",
      scrolldown: "스크롤 다운",
      introduce: "신랑 신부 소개합니다.",
      groomname: "신랑",
      bridename: "신부",
      quote1: "서로 다른 길을 걸어온 저희가 이제 <span class=\"mobile-break\">부부의 연으로 한 길을 걸어가고자</span> <span class=\"mobile-break\">합니다.</span>",
      quote2: "이 자리에 참석하시어 축복해주시길 <span class=\"mobile-break\">소망합니다.</span>",
      countdowntime: "그 행복의 순간 카운트 다운",
      day: "일",
      hour: "시간",
      minute: "분",
      second: "초",
      placeevent: "신랑측과 신부측의 예식 장소",
      groomhome: "신랑 자택",
      timestart: "",
      invitedatetext: "일요일",
      lunarcalendar: "음력 10월 10월",
      groomaddress: "Truong Yen, Chuong My, Ha Noi",
      bridehome: "신부 자택",
      brideaddress: "Hoa Nam, Ung Hoa, Ha Noi",
      imagealbum: "Gallery",
      sendgift: "마음을 전하실 곳",
      thankyou1: "이 자리에 참석하시어 축복해주시면 <span class=\"mobile-break\">더 없는 기쁨으로</span> <span class=\"mobile-break\"> 간직하겠습니다.</span>",
      thankyou2: "감사합니다!",
      bridemenu: "신랑 신부",
      weddingdatemenu: "결혼 날짜",
      gallerymenu: "Gallery",
      sendcommenttitle: "축하 메시지를 남겨주세요.",
      commentname: "이름",
      commentmessage: "축하 메시지",
      sendcommentcontent: "등록하기",
      allcomment: "모든 메시지"

    }
  };

  // Function to switch to Korean
  function switchToKorean() {
    document.querySelector('.title-change').innerHTML = translations.korean.title;
    document.querySelector('.bridegroom-name').innerText = translations.korean.names;
    document.querySelector('.namegroom').innerText = translations.korean.namegroom;
    document.querySelector('.namebride').innerText = translations.korean.namebride;
    document.querySelector('.eventdate').innerText = translations.korean.eventdate;
    document.querySelector('.scrolldown').innerText = translations.korean.scrolldown;
    document.querySelector('.introduce').innerText = translations.korean.introduce;
    document.querySelector('.groomname').innerText = translations.korean.groomname;
    document.querySelector('.bridename').innerText = translations.korean.bridename;
    document.querySelector('.quote1').innerHTML = translations.korean.quote1;
    document.querySelector('.quote2').innerHTML = translations.korean.quote2;
    document.querySelector('.countdowntime').innerText = translations.korean.countdowntime;
    document.querySelector('.day').innerText = translations.korean.day;
    document.querySelector('.hour').innerText = translations.korean.hour;
    document.querySelector('.minute').innerText = translations.korean.minute;
    document.querySelector('.second').innerText = translations.korean.second;
    document.querySelector('.placeevent').innerText = translations.korean.placeevent;
    document.querySelector('.groomhome').innerText = translations.korean.groomhome;
    document.querySelector('.timestartgroom').innerText = translations.korean.timestart;
    document.querySelector('.timestartbride').innerText = translations.korean.timestart;
    document.querySelectorAll('.invi_date_text').forEach(function(element) {
        element.innerText = '2024';
    });
    document.querySelectorAll('.invi_year_text').forEach(function(element) {
      element.innerText = translations.korean.invitedatetext;
  });
    document.querySelectorAll('.lunarcalendar').forEach(function(element) {
        element.innerText = translations.korean.lunarcalendar;
    });
    document.querySelectorAll('.invi_date').forEach(function(element) {
      element.innerText = '11';
  });
  document.querySelectorAll('.invi_month').forEach(function(element) {
    element.innerText = '10';
});
    document.querySelector('.groomaddress').innerText = translations.korean.groomaddress;
    document.querySelector('.bridehome').innerText = translations.korean.bridehome;
    document.querySelector('.brideaddress').innerText = translations.korean.brideaddress;
    document.querySelector('.imagealbum').innerText = translations.korean.imagealbum;
    document.querySelector('.sendgift').innerText = translations.korean.sendgift;
    document.querySelector('.thankyou1').innerHTML = translations.korean.thankyou1;
    document.querySelector('.thankyou2').innerText = translations.korean.thankyou2;
    document.querySelector('.bridemenu').innerText = translations.korean.bridemenu;
    document.querySelector('.weddingdatemenu').innerText = translations.korean.weddingdatemenu;
    document.querySelector('.gallerymenu').innerText = translations.korean.gallerymenu;
    document.querySelector('.sendcommenttitle').innerText = translations.korean.sendcommenttitle;
    document.querySelector('.commentname').innerText = translations.korean.commentname;
    document.querySelector('.commentmessage').innerText = translations.korean.commentmessage;
    document.querySelector('.sendcommentcontent').innerText = translations.korean.sendcommentcontent;
    document.querySelector('.allcomment').innerText = translations.korean.allcomment;
  }