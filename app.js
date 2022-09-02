// Chap No 01

// Q01
alert("Hello Peoples, How are you?")

// Q02
alert("Error! Please enter a valid password.")

// Q03
alert("Welcome to JS Land...\nHappy Coding!")



// Chap No 02
// Q01
var username;

// Q02
var myName="HaseebChouhan";

// Q03
var message="Hello World";
alert(message);

// Q04
var name=prompt("Enter your name");
alert(name)
var age=prompt("Enter your age");
alert(age +" years old")
var courseName=prompt("Enter your Course name");
alert("Certifed " + courseName)

// Q05



// Q06
var email="haseebchouhan61@gmail.com"
alert("My email address is " + email)

// Q07
var book="A smarter way to learn JavaScript"
alert("I am trying to learn from the Book " + book)

// Q08
document.write("Yah! i can write HTMl content through JavaScript")


// Q09
var book="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(book)



// Chap No 03
// Q01
var age=+prompt("Enter your age");
alert("I am " + age +" years old")
// Q02
for(var i=0; i<=4; i++){
    alert("you have visted this site "+ i +" times")
}
// Q03
var birthYear = 2003;
document.write("<br/>"+"<br/>"+"My Birth Year is "+birthYear);
// Q04
var visitorName = prompt("Enter Your Name");
var productName = prompt("what you want");
var quantity = +prompt("How much you want");
document.write("<br/>"+"<br/>" + visitorName + " ordered " + quantity + " " + productName + " on XYZ Clothing store");



// Chap No 04
// Q01
var name = "haseeb"; fName = "Imran"; dob = "16-01-2003";

// Q02
// legal
var _name;
var Name;
var my_name;
var myName;
var $MyName;
// illegal
// var #name;
// var -Name;
// var my-name;
// var my*Name;
// var write;

// Q03
document.write("<br/>"+"<br/>" + "Rules for naming JS variables"+"Variable names can only contain $, and _.For example $my_1stVariable"+"<br/>"+"Variables must begin with a $, _.  For example $name, _name or name"+"<br/>"+"Variable names are case senstive"+"Variable names should not be JS keywords")

// Chap No 05
// Q01
var value1 = +prompt("Enter your value1 for Addition");
var value2 = +prompt("Enter your value2 for Addition");
var total = (value1+value2);
document.write("<br/>"+"<br/>" + "Sum of "+ value1 + " and " + value2 + " is " + total);

// Q02
var value1 = +prompt("Enter your value1 for Substraction");
var value2 = +prompt("Enter your value2 for Substraction");
var total = (value1-value2);
document.write("<br/>"+"<br/>" + "Sub of "+ value1 + " and " + value2 + " is " + total);

var value1 = +prompt("Enter your value1 for Multiplication");
var value2 = +prompt("Enter your value2 for Multiplication");
var total = (value1*value2);
document.write("<br/>"+"<br/>" + "Multiplication of "+ value1 + " and " + value2 + " is " + total);

var value1 = +prompt("Enter your value1 for Division ");
var value2 = +prompt("Enter your value2 for Division");
var total = (value1/value2);
document.write("<br/>"+"<br/>" + "Division of "+ value1 + " and " + value2 + " is " + total);

// Q03

// Q04
var cost = 600;
var no_of_tickets = +prompt("how namy tickets you want?");
var tcost = (cost*no_of_tickets);
document.write("<br/>"+"<br/>" + "Total cost to buy "+no_of_tickets+" tickets to a movie is "+tcost+"PKR");

// Q05
document.write("<br/>"+"<br/>"+"Table of 4"+"<br/>"+"4x1=4"+"<br/>"+"4x2=8"+"<br/>"+"4x3=12"+"<br/>"+"4x4=16"+"<br/>"+"4x5=20"+"<br/>"+"4x6=24"+"<br/>"+"4x7=28"+"<br/>"+"4x8=32"+"<br/>"+"4x9=36"+"<br/>"+"4x10=40")

// Q06
var fahr = +prompt("Enter Temperature in Fahrenheit");
var celsius = "oC";
var Fahrenheit = "oF";
var tfahr = (fahr-32)*5/9
document.write("<br/>"+"<br/>"+fahr+Fahrenheit+" is "+tfahr+celsius)

var cels = +prompt("Enter Temperature in Celeius");
var tcels = (cels*9/5)+32
document.write("<br/>"+cels+celsius+" is "+tcels+Fahrenheit);



// Q07
var price_of_01 = 650;
var price_of_02 = 100;
var shipping_charges = 100;
var quantity_of_item_01 = +prompt("Quantity of item 01");
var quantity_of_item_02 = +prompt("Quantity of item 02");
var total_cost_of_order = (price_of_01*quantity_of_item_01+price_of_02*quantity_of_item_02+shipping_charges);
document.write("<br/>"+"<br/>"+"Shopping Cart");
document.write("<br/>"+"<br/>"+"<br/>"+"Price of item 1 is "+price_of_01);
document.write("<br/>"+"Ordered quantity of item 1 is "+quantity_of_item_01);
document.write("<br/>"+"Price of item 2 is "+price_of_02);
document.write("<br/>"+"Ordered quantity of item 2 is "+quantity_of_item_02);
document.write("<br/>"+"Shipping charges "+shipping_charges);
document.write("<br/>"+"<br/>"+"Total cost of your order is "+total_cost_of_order);



// Q08
var sub1 = +prompt("Enter your Bio");
var sub2 = +prompt("Enter your Chem");
var sub3 = +prompt("Enter your Phy");
var sub4 = +prompt("Enter your Maths");
var sub5 = +prompt("Enter your Eng");

var obtain_no = (sub1+sub2+sub3+sub4+sub5);

var Total_no = +prompt("Enter Total Number");

var percentage = (obtain_no/Total_no)*100;

document.write("<br/>"+"<br/>"+"Marks Sheet");
document.write("<br/>"+"<br/>"+"Total marks: ",Total_no);
document.write("<br/>"+"Your Obtain Number is:", obtain_no);
document.write("<br/>" + "Your percentage is:", percentage+"%");

if(percentage>=80){
    document.write("<br/>" + "Your Grade is A+")
}
else if(percentage>=70){
    document.write("<br/>" + "Your Grade is A")
}
else if(percentage>=60){
    document.write("<br/>" + "Your Grade is B")
}
else if(percentage>=50){
    document.write("<br/>" + "Your Grade is C")
}
else if(percentage<50){
    document.write("<br/>" + "Your Grade is F")
}


// Q09
var us_$ = 104.80;
var s_Riyal = 28;
var usDollar = +prompt("How much dollar you want to convert");
var riyal = +prompt("How much Riyal you want to convert");
var PKR = (usDollar*us_$+riyal*s_Riyal);
document.write("<br/>"+"<br/>"+"Currency in PKR");
document.write("<br/>"+"<br/>"+"Total Currency in PKR: ",PKR);


// Q10

var number = 40;
var a = 5;
var b = 10;
var c = 2;
alert((number + a) * b / c);

// Q11
var Currentyear = +prompt("enter Current Year");
var Birthyear = +prompt("enter Year of birth");
var tage = (Currentyear-Birthyear);
document.write("<br/>"+"<br/>"+"Age Calculator")
document.write("<br/>"+"<br/>"+"Current Year: ",Currentyear);
document.write("<br/>"+"Birth Year: ",Birthyear);
document.write("<br/>"+"Your Age is: ",tage);

// Q12
var radius = +prompt("Enter radius of circle");
var pie = 3.142;
var circum = (2*pie*radius);
var area = (pie*radius*radius);
document.write("<br/>"+"<br/>"+"The Geometrizer")
document.write("<br/>"+"<br/>"+"Radius of a circle: ",radius);
document.write("<br/>"+"The Circumference is: ",circum);
document.write("<br/>"+"The Area is ",area);

// Q13
var fav_snack = prompt("Enter your favourite Snacks");
var current_Age = prompt("Enter your Age");
var max_Age = prompt("At what age you want to eat snacks");
var amountOfsnacks = prompt("How much you eat in a day");
var life = ((max_Age-current_Age)*amountOfsnacks);
document.write("<br/>"+"<br/>"+"The Lifrtime Supply Calculator");
document.write("<br/>"+"<br/>"+"Favourite Snacks: ",fav_snack);
document.write("<br/>"+"Current Age: ",current_Age);
document.write("<br/>"+"Estimated Maximum Age: ",max_Age);
document.write("<br/>"+"Amount of Snacks per day: ",amountOfsnacks);
document.write("<br/>"+"You will need "+life+" "+fav_snack+" to last you until the ripe old of "+max_Age);


// Chap No 06-09
// Q01
var a = 10;
document.write("Result: ")
document.write("</br>"+"The value of a is ", a); 
document.write("</br>"+"....................................")
document.write("</br>"+"</br>"+"The value of ++a is ", ++a);
document.write("</br>"+"Now the value of a is ", a);
document.write("</br>"+"</br>"+"The value of a++ is ", a++);
document.write("</br>"+"Now the value of a is ", a);
document.write("</br>"+"</br>"+"The value of --a is ", --a);
document.write("</br>"+"Now the value of a is ", a);
document.write("</br>"+"</br>"+"The value of a-- is ", a--);
document.write("</br>"+"Now the value of a is ", a);

// Q02
var a = 2;
var b =1;
document.write("Decreament ", --a);
document.write("</br>");
document.write("Value of a is ",a);
document.write("</br>");    
document.write(--a - --b);
document.write("</br>"); 
document.write(--a - --b + ++b);
document.write("</br>");
document.write(--a - --b + ++b + b--);
document.write("</br>"+"a is ",a);
document.write("</br>"+"b is ",b)
document.write("</br>"+"Result is " ,--a - --b + ++b + b--);

// Q03
var n = prompt("Enter Your Good Name: ");
alert("Welcome to our website "+n);

// Q05
var No_for_table = +prompt("Enter Number which table you want")

document.write("<table>")
if(No_for_table === No_for_table){
for( var i = 1; i <= 10; i++){
    document.write("<tr>"+"<td>"+No_for_table+"X"+i+"="+No_for_table*i+"<td/>"+"<tr/>")
}
document.write("<table/>")
}else{
    for( var i = 1; i <= 10; i++){
        document.write("<tr>"+"<td>"+5+"X"+i+"="+5*i+"<td/>"+"<tr/>")
    }
}



// Chap No 09-11
// Q01
var city = prompt("Enter Your City Name");
if (city === "karachi") {
    alert("Welcome to the city of lights");
}

// Q02
var Gender = prompt("Enter Your Gender");
if (Gender === "male") {
    alert("Good Morning Sir.") 
}else if (Gender === "female"){
    alert("Good Morning Maam.")
}

// Q03
var _color = prompt("Enter Your signal color");
if (_color === "red") {
    alert("Must Stop") 
}else if (_color === "yellow"){
    alert("Ready to move")
}else if (_color === "green"){
    alert("Move Now")
}

// Q04
var remain_fuel = prompt("Enter Your remaning fuel");
if (remain_fuel <= "0.25") {
    alert("Please refill the fuel in your car") 
}else{
    alert("Keep driving")
}

// Q06
var sub1 = +prompt("Enter your Bio");
var sub2 = +prompt("Enter your Chem");
var sub3 = +prompt("Enter your Phy");
var sub4 = +prompt("Enter your Maths");
var sub5 = +prompt("Enter your Eng");

var obtain_no = (sub1+sub2+sub3+sub4+sub5);

var Total_no = +prompt("Enter Total Number");

var percentage = (obtain_no/Total_no)*100;

document.write("<br/>"+"<br/>"+"Marks Sheet");
document.write("<br/>"+"<br/>"+"Total marks : ",Total_no);
document.write("<br/>"+"Marks Obtained :", obtain_no);
document.write("<br/>" + "Percentage :", percentage+"%");

if(percentage>=80){
    document.write("<br/>" + "Grade : A+")
    document.write("<br/>" + "Remarks : Excellent")
}
else if(percentage>=70){
    document.write("<br/>" + "Grade : A")
    document.write("<br/>" + "Remarks : Good")
}
else if(percentage>=60){
    document.write("<br/>" + "Grade : B")
    document.write("<br/>" + "Remarks : You need to improve")
}

else if(percentage<50){
    document.write("<br/>" + "Grade : Fail")
    document.write("<br/>" + "Remarks : Sorry")
}


// Q07
var guessNum = prompt("Enter Your Number");
var secretNum = 5;
if (guessNum === "5") {
    alert("Bingo! Correct answer") 
}else if(guessNum === "6"){
    alert("Close enough to the correct answer")
}else if(guessNum === "4"){
    alert("Close enough to the correct answer")
}else{
    alert("Better Luck Next Time")
}

// Q08
var _num = +prompt("Enter your number");
if(_num%3===0){
    alert("It is Divisible by 3")
}else{
    alert("It is Not Divisible by 3")
}

// Q09
var _num = +prompt("Enter your number");
if(_num%2===0){
    alert("It is Even Number")
}else{
    alert("It is Odd Number")
}

// Q10
var temp = prompt("Enter Your Number");

if (temp > "40") {
    alert("It is too hot outside.") 
}else if(temp > "30"){
    alert("The Weather today is Normal.")
}else if(temp > "20"){
    alert("Today’s Weather is cool.")
}else if(temp > "10"){
    alert("OMG! Today’s weather is so Cool.")
}else{
    alert("Freezing Point")
}


// Q11
var fnum = +prompt("Enter First Number")
var operator = prompt("Enter Operator")
var snum = +prompt("Enter Second Number")

if(operator === "+"){
    alert(fnum+snum)
}else if(operator === "-"){
    alert(fnum-snum)
}else if(operator === "*"){
    alert(fnum*snum)
}else if(operator === "/"){
    alert(fnum/snum)
}else if(operator === "%"){
    alert(fnum%snum)
}


// Chap No 12-13
// Q02
var int1 = +prompt("First Interger");
var int2 = +prompt("Second Interger");

if(int1 < int2){
    alert(int2)
}
else if(int1 > int2){
    alert(int1)
}
else if(int1 === int2){
    alert(int1+" = "+int2)
}

// Q03
var _num_ = +prompt("Enter number to check Neg, Pos or zero");

if(_num_ === 0){
    alert("Zero")
}
else if(_num_ < 0){
    alert("Negative")
}
else {
    alert("Positive")
}

// Q04
var vow = prompt("Enter Letter to check Vowel");
var vow1 = vow.toLowerCase(vow);
if(vow1 === "a"){
    alert("True")
}
else if(vow1 === "e"){
    alert("True")
}
else if(vow1 === "i"){
    alert("True")
}
else if(vow1 === "o"){
    alert("True")
}
else if(vow1 === "u"){
    alert("True")
}
else {
    alert("False")
}

// Q05
var pass = prompt("Set your password");
var pass1 = prompt("Enter your password which you have set");

if(pass1 == pass){
    alert("Correct! The password you entered matches the original password")
}
else {
    alert("Incorrect password")
}

// Q06
var greeting = +prompt("enter time in 24 hour format")

if (greeting < 18) {
    alert("Good day")    
}
else{
    alert("Good evening") 
}

// Q07
var time_ = +prompt("enter time to convert from 24 hours to 12 hours format")

if (time_ == 12) {
    alert("12:00 p.m")    
}
else if (time_ == 13) {
    alert("1:00 p.m")    
}
else if (time_ == 14) {
    alert("2:00 p.m")    
}
else if (time_ == 15) {
    alert("3:00 p.m")    
}
else if (time_ == 16) {
    alert("4:00 p.m")    
}
else if (time_ == 17) {
    alert("5:00 p.m")    
}
else if (time_ == 18) {
    alert("6:00 p.m")    
}
else if (time_ == 19) {
    alert("7:00 p.m")    
}
else if (time_ == 20) {
    alert("8:00 p.m")    
}
else if (time_ == 21) {
    alert("9:00 p.m")    
}
else if (time_ == 22) {
    alert("10:00 p.m")    
}
else if (time_ == 23) {
    alert("11:00 p.m")    
}
else if (time_ == 0) {
    alert("12:00 a.m")    
}
else{
    alert(time_+":00 a.m") 
}


// Chap No 12-13
// Q01 & Q02
var st_name = [];

// Q03
var string_ = ["haseeb","hamza","sikandar"];
alert(string_)

// Q04
var number_ = [5,7,9,4,3];
alert(number_)

// Q05
var bool_ = [true,false];
alert(bool_)

// Q06
var mix = ["haseeb",5,true,"hamza",false,8];
alert(mix)

// Q07
var edu_ = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","Ph.D"];
document.write("<h1>")
document.write("<br/>" + "<br/>" +"Qualifications")
document.write("<br/>" + "<br/>" + "1) "+edu_[0])
document.write("<br/>" +"2) "+ edu_[1])
document.write("<br/>" +"3) "+ edu_[2])
document.write("<br/>"+"4) " + edu_[3])
document.write("<br/>" +"5) "+ edu_[4])
document.write("<br/>" +"6) "+ edu_[5])
document.write("<br/>" +"7) "+ edu_[6])
document.write("<br/>" +"8) "+ edu_[7])
document.write("<h1/>")

// Q08
var S_name = ["Hamza","Sikandar","Wasi"];
var S_score = ["423","355","342"];
var tolal_ = 500;
document.write("<h1>");
document.write("<br/>" + "<br/>" + "Score of "+S_name[0]+ " is " + S_score[0] +". Percentage:"+ (S_score[0]/tolal_)*100 +"%");
document.write("<br/>" + "Score of "+S_name[1]+ " is " + S_score[1] +". Percentage:"+ (S_score[1]/tolal_)*100 +"%");
document.write("<br/>" + "Score of "+S_name[2]+ " is " + S_score[2] +". Percentage:"+ (S_score[2]/tolal_)*100 +"%");
document.write("<h1/>")

// Q09
// (a)
var color_name = ["blue","green","red"];
var color1 = prompt("Enter color name you want to add in begining");
var color2 = color1.toLowerCase(color1);
color_name.unshift(color2);
alert(color_name)

// (b)
var color_name = ["blue","green","red"];
var color3 = prompt("Enter color name you want to add in end");
var color4 = color3.toLowerCase(color3);
color_name.push(color4);
alert(color_name)

// (c)
var color_name = ["blue","green","red"];
var color5 = prompt("Enter two color name you want to add in begining(i.e. white,pink)");
var color6 = color5.toLowerCase(color5);
color_name.unshift(color6);
alert(color_name)

// Q10
var score_of_std = [320,230,480,120]
score_of_std.sort(function(a, b){return a-b});
alert(score_of_std)

// Q11
var names_of_cities = ["karachi","islamabad","lahore","quetta","peshawar"];
var city_Name = prompt("enter city name");
var city_Name1 = city_Name.toLowerCase(city_Name)
if(city_Name1 === "karachi"){
    document.write("<br/>"+"<br/>"+names_of_cities[0])
}
else if(city_Name1 === "islamabad"){
    document.write("<br/>"+"<br/>"+names_of_cities[1])
}
else if(city_Name1 === "lahore"){
    document.write("<br/>"+"<br/>"+names_of_cities[2])
}
else if(city_Name1 === "quetta"){
    document.write("<br/>"+"<br/>"+names_of_cities[3])
}
else if(city_Name1 === "peshawar"){
    document.write("<br/>"+"<br/>"+names_of_cities[4])
}


// Q12
var arr1 = ["This", "is", "my", "cat"];
var arr2 = arr1.join(" ");
document.write("<br/>"+"<br/>"+"Array:"+"<br/>"+arr1)
document.write("<br/>"+"<br/>"+"String:"+"<br/>"+arr2)


// chapter No 17-20
// Q01
var multarr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// Q02
var multarr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var i = 0; i < multarr.length; i++){
    alert(multarr[i]);
}

// Q03
document.write("<table>")

for( var i = 1; i <= 10; i++){
    document.write("<tr>"+"<td>"+i+"<td/>"+"<tr/>")
}

document.write("<table/>")


// Q04
var No_for_table = +prompt("Enter Number which table you want")
var lenght_of_table = +prompt("Enter Lenght of table")
document.write("<table>")
for( var i = 1; i <= lenght_of_table; i++){
    document.write("<tr>"+"<td>"+No_for_table+"X"+i+"="+No_for_table*i+"<td/>"+"<tr/>")
}
document.write("<table/>")

// Q05
var fruits = ["apple","banana","mango","orange","strawberry"]
document.write("<br/>")
document.write("<br/>")
for( var i = 0; i <= 4; i++){
    document.write("<br/>"+fruits[i])
}
document.write("<br/>")
for( var i = 0; i <= 4; i++){
    document.write("<br/>"+"Element at index "+i+" is "+fruits[i])
}

// Q06


var count = [];
document.write("Counting: ");
for(count=1; count<=15; count++){
    document.write(count,",");
}

document.write("</br>");


document.write("Reverse Counting: ");
var count_rev = [];
for(count_rev=10; count_rev>=1; count_rev--){
    document.write(count_rev, ",");
}

document.write("</br>");


document.write("Even: ");

for (x=1; x <= 20; x++){
    if(x%2 == 0){
        document.write(x, ",");
    }
}

document.write("</br>");


var count = [];
document.write("Odd: ")
for(count=0; count<=20; count++)
if(count%2){
    document.write(count,"," );
}

document.write("</br>")
document.write("Series: ")
for (x=1; x <= 20; x++){
    if(x%2 == 0){
        document.write(x, "k,");
    }
}

// Q08
var a = ["24", "53", "78", "91", "12"];
document.write("Array items: ", a);
document.write("</br>")
document.write("Largest number is ", a[3]);

// Q09
var a = ["24", "53", "78", "91", "12"];
a.reverse();
document.write("Array items: ", a);
document.write("</br>")
document.write("Smallest number is  ", a[0]);

// Q10
for (x=1; x <= 20; x++){
    document.write(x*5+", ")
}





