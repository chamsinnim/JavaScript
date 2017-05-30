var html = window.document.documentelement,
    head = window.document.head,
    body = window.document.body;


var num = 291029304;
var str = 'morning food';
var boo = false;
const NULL = null;
const UNDEFINED = undefined;

var glass = {};
var watchGlass = function(){};
var glasses = [];

var convert_num_to_str_case1 = String(num);
console.log('String(num):', convert_num_to_str_case1);
console.log('타입:: String(num):', typeof convert_num_to_str_case1);
var convert_num_to_str_case2 = num + '';
console.log('num + \'\':', convert_num_to_str_case2);
console.log('타입:: num + \'\':', typeof convert_num_to_str_case2);
var convert_num_to_str_case3 = num.toString();
console.log('num.toString:', convert_num_to_str_case3);
console.log('타입:: num.toString:', typeof convert_num_to_str_case3);

console.log(convert_num_to_str_case3);
console.log(Number(convert_num_to_str_case3));

var news_font_size = '16.6345px';

var convert_news_font_size_to_int = window.parseInt(news_font_size, 10);
console.log('conver_news_font_size_to_int:', convert_news_font_size_to_int);
var convert_news_font_size_to_float = window.parseFloat(news_font_size, 10);
console.log('conver_news_font_size_to_float:', convert_news_font_size_to_float);

console.log('boolean(num):', Boolean(num));
console.log('boolean(0):', Boolean(0));
console.log('boolean(str):', Boolean(str));
console.log('boolean(""):', Boolean(""));
console.log('boolean(" "):', Boolean(" "));
console.log('boolean(glass):', Boolean(glass));
console.log('boolean(glasses):', Boolean(glasses));
console.log('boolean(watchGlass):', Boolean(watchGlass));

console.log('%c---------------------', 'color: #2367fc'); //구분자

console.log('!!num:', !!num);
console.log('!!0:', !!0);
console.log('!!str:', !!str);
console.log('!!"":', !!"");
console.log('!!" ":', !!" ");
console.log('!!glass:', !!glass);
console.log('!!glasses:', !!glasses);
console.log('!!watchGlass:', !!watchGlass);

console.log('!!NULL:', !!NULL);
console.log('!!UNDEFINED', !!UNDEFINED);
console.log('!NULL:', !NULL);
console.log('!UNDEFINED', !UNDEFINED);
console.log('+\'NULL\':', + NULL);
console.log('typeof (+\'NULL\'):', typeof (+ NULL));
console.log('+ \'UNDEFINED\':', + UNDEFINED);
console.log('typeof (+\'UNDEFINED\'):', typeof (+ UNDEFINED));
console.log('String(NULL):', String(NULL));
console.log('typeof String(NULL):',typeof String(NULL));
console.log('String(UNDEFINED):', String(UNDEFINED));
console.log('typeof String(UNDEFINED):', typeof String(UNDEFINED));

console.log('null + 10;', null + 10);
console.log('undefined + 10;', undefined + 10);

var convert_string_from_number = [];

convert_string_from_number[0] = String(909);

var music_list = [];

music_list[0] = '데칼코마니';
music_list[1] = '러시아 룰렛';
music_list[2] = '나야 나';

console.log('music-ist.length:', music_list.length);

music_list['author'] = 'yamoo9';
music_list['maker'] = 'YG';
music_list['location'] = 'Seoul';

console.log('music_list.length:', music_list.length);

var n1 = 99;
var k2 =  n1;

n1 = n1 * n1;
console.log('n1:', n1);
console.log('k2:', k2);

console.group('값 참조(pass by reference)');
var playlist = music_list;
console.log('music_list:', music_list);
console.log('playlist:', playlist);

//함수 객체
sendFile();

var myFn = new Function('console.log("create function object from function constructor.")');

function sendFile(){
    console.log('sendFile')
}
var sendMessage = function(){
    console.log('sendMessage')
};

sendMessage();

//기본 객체
var init_style_of_body = {
    'margin' : 0,
    'font-size' : '14px',
    lineHeight : 1.5,
    letterSpacing : 0.04 + 'em',
    color : '#313233'
};

console.log('init_style_of_body:', init_style_of_body);
console.log('init_style_of_body.length:', init_style_of_body.length);


var legs = 4;

var animal = {};
animal.legs = 4;


//객체의 리터럴 속성을 출력하는 방법
var circle = 8;
var brand_makers = ['KIA', 'Hyundai', 'Samsung', 'Google'];
var getMaker = function(brand_index){
    return brand_makers[brand_index];
};

var supercar = {
    engine: 'V8',
    wheels: 8,
    showMaker: 'getMaker'
};

// var student_info = ['name','age','hobby', 'school', 'grade', 'major', 'sub_major', 'family_group'];
var student_info = ['name','hobby', 'school', 'grade', 'major', 'sub_major'];
var student_name = ['한성욱', '한성후', '이재선', '한상호', '전운하','정진영','정기홍','경종민','이용일','정수빈'];
var hobby = ['축구', '농구', '야구', '배구', '수영', '테니스','배드민턴','영화감상','책읽기','스키'];
var school = ['명지대','고려대','카이스트','부산대','서해대','국민대','연세대','서울대','공주대','강원대'];
var grade =['1학년', '2학년','3학년'];
var major = ['산업공학과', '시각디자인과', '기계공학','전자공학','전기공학','생물학과','화학과','산업디자인과','물리학과','수학과'];
var sub_major = ['산업공학과', '시각디자인과', '기계공학','전자공학','전기공학','생물학과','화학과','산업디자인과','물리학과','수학과'];
// var family_group = [1,2,3,4,5,6,7,8,9,10];
console.log(student_name);
console.log('student_info:', student_info);
console.log('student_info.length:', student_info.length)

function randomIndex(total) {
    return Math.floor( Math.random() * total );
}

function makeStudent() {
    
    var _student = {};

    _student[ student_info[0] ] = student_name[randomIndex(student_name.length)];
    _student[ student_info[1] ] = hobby[randomIndex(hobby.length)];
    _student[ student_info[2] ] = school[randomIndex(school.length)];
    _student[ student_info[3] ] = grade[randomIndex(grade.length)];
    _student[ student_info[4] ] = major[randomIndex(major.length)];
    _student[ student_info[5] ] = sub_major[randomIndex(sub_major.length)];

    return _student;
    
}