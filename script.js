let string="Alexx is  a youtuber good boy and he is youtuber"  /* a string in which we have to find something */

// you can make regular exprssion in two ways 

// By regular literal expression

// let regex=/youtuber/gi

// g(global flag)-matched glbally
// i(case insensitive)

// By calling constructor function of regular expression object

// let Regex=new RegExp("youtuber");

// now try to find this pattern in above string with the help of below methods

// By exec() method
// it return an array of result
// const regexByLiteral=regex.exec(string);
// console.log(regexByLiteral);
// console.log(regex.exec(string));
// if(regexByLiteral!==null){
//     alert("Yes its  present inside the string")
// }else{
//     alert("No its not present inside the string")
// }

// const RegexByConstructor=Regex.exec(string);
// console.log(RegexByConstructor)

// By test() method
// it return true if regular expression pattern is present inside string
// console.log(regex.test(string))
// const stringPresent=regex.test(string);
// // if(stringPresent){
// //     alert("Yes its  present inside the string")
// // }else{
// //     alert("No its not present inside the string")
// // }


//By match() method 
// it returns array of matched string such as [Youtuber,Youtuber]
// const matchArray=string.match(regex);
// console.log(matchArray)
// if(matchArray.length === 0){
//     alert("No its not present in string")
// }else{
//     alert("Yes its present inside string")
// }


// By search method
// it returns index of pattern matched in the string
// it has no effect of global flag it will return index of first matched only 
// if no match is found it will return -1 
// console.log(string.search(regex))
// console.log(string.search(regex))
// if(string.search(regex) === -1){
//     alert("No its not present in string")
// }else{
//     alert("Yes its present inside string")
// }\

// Replace method 
// it will replace all matched patterns with a string given as second parameter and will return new modified string
// const newModifiedString=string.replace(regex,"Footeball Player");
// console.log(newModifiedString)


// Sepecial Characters in Regular Expression
// Assertions (means a string should have exactly this pattern inside it)

// 1) ^(caret)-(used to matched beginning of string with regular expression)

// let regex=/^Alexx/
// const matched=regex.test(string);
// if(matched){
//     alert("Yes its matched")
// }else{
//     alert("No its not matched")
// }

// 2) $(dollar)-(used to matched end of string with regular expression)

// let regex=/youtuber$/
// const matched=regex.test(string);
// if(matched){
//     alert("Yes its matched")
// }else{
//     alert("No its not matched")
// }


// you can used ^ and $ together to know if its string is a exact match
// let regex=/^youtuber$/ /* it will matched if only string is exactly as same as regular expression */
// const matched=regex.test(string);
// if(matched){
//     alert("Yes its matched")
// }else{
//     alert("No its not matched")
// }

// 3) \b-
// you can use this in two ways 
// 1)/\bhello/ will match any "hello" which is not exactly precedded by word character
// 2)/hello\b/ will match any "hello" which is not exactly followed by word character
// let regex=/hello\b/
// let string2=" how are youhello how?"
// console.log(regex.test(string2))


// 4) \B-
// you can use this in two ways 
// 1)/\Bhello/ will match any "hello" which has word character exactly before it
// 2)/hello\B/ will match any "hello" which has word character exactly after it
// let regex=/hello\B/
// let string2=" how are hellohgfh b how?"
// console.log(regex.test(string2))

// 5) x(?=y) Positive Lookahead assertion
// matches x only if it is exactly followed by y
//  /hello(?=ght)/ will match any hello  which has "ght" agter it
// let string2="hello,how are you helloght";
// let regex=/hello(?=ght)/;
// console.log(regex.test(string2))

// 6) x(?!y) Negative Lookahead assertion
// matches x only if it is not exactly followed by y
//  /hello(?!ght)/ will match any hello  which has no "ght" after it
// let string2="hello,,how are you helloght";
// let regex=/hello(?!ght)/;
// console.log(regex.test(string2))

// 7) (?<=y)x Positive Lookbehind assertion
// Matches "x" only if "x" is exactly preceded by "y"
//  /(?<=ght)hello/ will match any hello  which has "ght" before it
// let string2="ghthello,how are you helloght";
// let regex=/(?<=ght)hello/;
// console.log(regex.test(string2))

// 8) (?<!y)x Negative Lookbehind assertion
// matches x only if it is not exactly preceeded by y
//  /(?<!ght)hello/ will match any hello  which has no "ght" beforeit
// let string2="ghthello,,how are you ghthelloght";
// let regex=/(?<!ght)hello/;
// console.log(regex.test(string2))

// Character Classes--used when you have to match possible patterrn with string
// square brackets are used for character classes '[]'
// [abc] means its possible that regular expression wil match if string contains any character from a,b,c
//means its possible that it can contain any chracter from this but we cannot exactly tell that which charcter

// Charcter classes are clsasified as following

// 1)[]-you can put anything that you want to match with string 
// like if you want match any character from  h,e,l,o then put every charcter in line /[helo]/
// let string2=" tis is ax!"
// let regex=/[helo]/gi 
/* [abcdefghijklmnopqrstuvwxyz] */
// [a-z]
// [A-Z]
// [0-9]
// [a-h]
// console.log(regex.test(string2));

// 2)[^]-will match every character except anything pressent inside squaure brackets
// work opoosite as []
// [^abc] will match anything except charcters a,b,c
// let string2="hello"
// let regex=/[^abc]/gi 
// console.log(regex.test(string2))

// 3) . (dot)-used when you have to match any possible character but only one
// /.y/ means before  "y" there can be only one character but it can be any charcter
// let string2="yes make my day"; 
// let regex=/.y/gi
// console.log(regex.test(string2));
// it will return true for "my and ay" but not for y because there is no any charcter present before y 

// 4) \d -it will match any digit inside string
// /\d/ will match digit98 in string " hello this 98"
// let string2="Hell this45"
// let regex=/\d/gi
// console.log(regex.test(string2))
// equivalent to [0-9]

// 5) \D -it will match any non-digit inside string
// /\D/ will match "hello this" in string "hello this 98"
// let string2="45"
// let regex=/\D/gi
// console.log(regex.test(string2))
// equivalent to [^0-9]

// 6)\w-it will match any alphanumeric character 
// A to Z ,a to z,0 to 9,_(underscore)
// let string2="%$#%$%"
// let regex=/\w/gi
// console.log(regex.test(string2))
// will return false because there is no alphanumeric character presesnt inside string
// equivalent to [a-zA-Z0-9_]

// 7)\W-it will match any cahracter except any alphanumeric character 
// let string2="gdffdg56"
// let regex=/\W/gi
// console.log(regex.test(string2))
// will return false because there are all alphanumeric character presesnt inside string
// equivalent to [^a-zA-Z0-9_]

// 8)\s-it will match any white space charcter such as such as space and tab
// A to Z ,a to z,0 to 9,_(underscore)
// let string2="gdffdg56"
// let regex=/\W/gi
// console.log(regex.test(string2))
// will return false because there are all alphanumeric character presesnt inside string

// 9) \ (backslash)- backslash is used to escape character 
// let strin2="hello thi hfghg!"
// let regex=/\s/gi
// console.log(regex.test(strin2));

// x|y (disjunction) -return true if either x or y is presesnt inside the string
// let string2=" heello this gfdg";
// let regex=/heello|gfdg/gi
// console.log(regex.test(string2));


// Groups - groups are denoted with paranthesis()
// used when you have to match multiple patterns inside single string
//  for eg : email pattern  abc564@abc.com
//  /([a-zA-Z0-9])@([a-zA-Z]).([a-zA-Z])/gi
// here ([a-zA-Z0-9]) is one group ([a-zA-Z]) is another group and ([a-zA-Z]) is another group in which there are different reular expression pattern

// let stringTwo="abc127@abcs.com"
// let regex=/([<fdsf>a-zA-Z0-9]){1,}@([a-zA-Z]){1,}.([a-zA-Z]){1,}/;
// console.log(regex.test(stringTwo))


// Quntifier - qunatifier represent qauntity of pattern 
// that how many times should pattern occurs
// Qauntifiers are clsasified as following

// 1) *: it will match to 0 or more occurences 
// for eg: /ba*/ will match to any b which has 0 or more ocurrences of a after it
// let string1="b is letter os baaaltimore and baa is letter of baamore";
// let regex=/ba*/gi
// console.log(string1.match(regex))


// 2) +: it will match to 1 or more occurences 
// for eg: /ba*/ will match to any b which has at least 1 or more ocurrences of a after it
// let string1="b is letter os baaaltimore and baa is letter of baamore";
// let regex=/ba+/gi
// console.log(string1.match(regex))

// 3) {n}: it will match to n number of occurences 
// for eg: /ba{3}/ will match to any b which has exactly 3 a after it
// let string1="b is letter os baaaltimore and baa is letter of baamore";
// let regex=/ba{3}/gi
// console.log(string1.match(regex))

// 4) {n,}: it will match to at least n number of occurences 
// for eg: /ba{3,}/ will match to any b which has at least 3 but there can be more a after it
// let string1="b is letter os baaaltimore and baa is letter of baamor baaaaaaa";
// let regex=/ba{3,}/gi
// console.log(string1.match(regex))

// 4) {n,m}: it will match to at least n and at most m number of occurences 
// for eg: /ba{3,8}/ will match to any b which has at least 3 and at most 8 a after it 
// let string1="baaaaa is letter os baaaltimore and baa is letter of baamor baaaaaaaaaaaaa";
// let regex=/ba{3,8}/gi
// console.log(string1.match(regex))

// form validation

function submitForm() {
    const name = document.querySelector('#nameInput');
    // console.log(name)
    const nameValue = name.value;
    // console.log(nameValue)
    const phone = document.querySelector('#phoneInput');
    const phoneValue = phone.value;
    const email = document.querySelector('#emailInput');
    const emailValue = email.value;
    const password = document.querySelector('#passwordInput');
    const passwordValue = password.value;
    // console.log(phoneValue,emailValue,passwordValue,nameValue)

    let regexForName = /([A-Z]{1}[a-z]{1,})\s([A-Z]{1}[a-z]{1,})/
    const nameResult = regexForName.test(nameValue)
    console.log(nameResult)
    if (nameResult === false) {
        const errorForName = document.querySelector("#errorForName")
        errorForName.style.display = "block"
        errorForName.textContent = "Please enter a valid name"
        name.style.border = "1px solid red"
    } else {
        errorForName.style.display = "none"
        name.style.border = "1px solid black"
    }


    let regexForPhone = /[789]{1}[0-9]{9}/
    const phoneResult = regexForPhone.test(phoneValue)
    console.log(phoneResult)
    if (phoneResult === false) {
        const errorForPhone = document.querySelector("#errorForPhone")
        errorForPhone.style.display = "block"
        errorForPhone.textContent = "Please enter a valid phone"
        phone.style.border = "1px solid red"
    } else {
        errorForPhone.style.display = "none"
        phone.style.border = "1px solid black"
    }

    let regexForEmail = /^([0-9A-Za-z_\.-]){1,}@([0-9A-Za-z_\.-]){1,}\.([A-Za-z]){2,3}$/
    const emailResult = regexForEmail.test(emailValue)
    console.log(emailResult)
    if (emailResult === false) {
        const errorForEmail = document.querySelector("#errorForEmail")
        errorForEmail.style.display = "block"
        errorForEmail.textContent = "Please enter a valid email"
        email.style.border = "1px solid red"
    } else {
        errorForEmail.style.display = "none"
        email.style.border = "1px solid black"
    }

    //  a password must be eight characters
    //  must start with  uppercase letter, 
    // must have at least one special character 
    // must have numeric characters
     
    let regexForFirstCondition=/.{8,}/;
    let regexForSecondCondition=/^[A-Z]/
    let regexForThirdCondition=/[^a-zA-Z0-9]{1,}/
    let regexForFourthCondition=/[0-9]{1,}/

    let passwordResultForFirstCondition=regexForFirstCondition.test(passwordValue);
    let passwordResultForSecondCondition=regexForSecondCondition.test(passwordValue);
    let passwordResultForThirdCondition=regexForThirdCondition.test(passwordValue);
    let passwordResultForFourthCondition=regexForFourthCondition.test(passwordValue);
    console.log(passwordResultForFirstCondition,passwordResultForSecondCondition,passwordResultForThirdCondition,passwordResultForFourthCondition)

    if(!passwordResultForFirstCondition || !passwordResultForSecondCondition || !passwordResultForThirdCondition || !passwordResultForFourthCondition){
        const errorForPassword = document.querySelector("#errorForPassword")
        errorForPassword.style.display = "block"
        errorForPassword.textContent = "Please enter a valid password"
        password.style.border = "1px solid red"
    }else{
        errorForPassword.style.display = "none"
        password.style.border = "1px solid black"
    }
    
}
