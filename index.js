// nav bar buttons start
var aboutBtn = $('.about');

aboutBtn.on("click", switchToAbout);
function switchToAbout(){
  location.href = 'about.html';
}

var isBtn = $('.volunteer');

isBtn.on("click", switchToVolunteer);
function switchToVolunteer(){
  location.href = 'volunteer.html';
}

var homeBtn = $('.index');

homeBtn.on("click", switchToHome);
function switchToHome(){
  location.href = 'index.html';
}

var contactBtn = $('.contact');

contactBtn.on("click", switchToContact);
function switchToContact(){
  location.href = 'contact.html';
}

var isBtn = $('.is');

isBtn.on("click", switchToIS);
function switchToIS(){
  location.href = 'is.html';
}
//nav bar buttons start

//issues and solutions js code starts
var stemBtn = $('.stemWomen');

stemBtn.on("click", switchToStemWomen)
function switchToStemWomen(){
  location.href = 'women-in-stem.html';
}


var employBtn = $('.employ');

employBtn.on("click", switchToEmploy)
function switchToEmploy(){
  location.href = 'employment.html';
}

var eduBtn = $('.edu');

eduBtn.on("click", switchToEdu)
function switchToEdu(){
  location.href = 'education.html';
}

var abortBtn = $('.abort');

abortBtn.on("click", switchToAbort)
function switchToAbort(){
  location.href = 'abortion.html';
}

var birthBtn = $('.birth');

birthBtn.on("click", switchToBirth)
function switchToBirth(){
  location.href = 'birth-control.html';
}

var childBtn = $('.child');

childBtn.on("click", switchToChild)
function switchToChild(){
  location.href = 'child-marriage.html';
}

var childBtn = $('.child');

childBtn.on("click", switchToChild)
function switchToChild(){
  location.href = 'child-marriage.html';
}

var assaultBtn = $('.offense');

assaultBtn.on("click", switchToAssault)
function switchToAssault(){
  location.href = 'sexual-assualt.html';
}

var matWomenBtn = $('.matWomen');

matWomenBtn.on("click", switchToMatWomen)
function switchToMatWomen(){
  location.href = 'maternal-women.html';
} 
//I&S buttons end

//volunteer js code

var abortionButn=$(`.abortion`)

abortionButn.on("click",switchToVolunteerAbort);
function switchToVolunteerAbort(){
  location.href =`help-get-abortion-rights.html`;
}

//employment
var employmentButn = $(`.employment`)

employmentButn.on("click", switchToVolunteerEmployment);
function switchToVolunteerEmployment(){
  location.href = 'help-employ-women.html';
}
//sexual Aussault
var sexualAssaultBtn = $(`.sexualAssault`);

sexualAssaultBtn.on("click", switchToVolunteerToEndSexualAssault);
function switchToVolunteerToEndSexualAssault(){
  location.href = 'help-stop-sexual-assault.html';
}
//education
var educationButn=$(`.education`)

educationButn.on("click",switchToVolunteerEdu);
function switchToVolunteerEdu(){
  location.href=`help-give-women-education.html`;
}
//Maternal
var matButn=$(`.maternalStruggles`)

matButn.on("click",switchToVolunteerMaternal);
function switchToVolunteerMaternal(){
  location.href =`help-maternal-struggles.html`;
}
//Child Marriage
var chldMarriageBtn=$(`.childMarriage`)

chldMarriageBtn.on("click", swichToVolunteerChildMarriage);
function swichToVolunteerChildMarriage(){
  location.href=`help-stop-child-marriage.html`;
}
var birthConBtn = $(`.birthControl`);
birthConBtn.on("click", switchToVolunteerBirthCon);
function switchToVolunteerBirthCon(){
  location.href = 'help-birth-control.html'
}
var womenInStemBtn = $(`.womenStem`);
womenInStemBtn.on("click", switchToWomenInStem);
function switchToWomenInStem(){
  location.href = 'help-women-in-stem.html'
}

