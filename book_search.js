/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };
    
    result.SearchTerm = searchTerm

    for (var i = 0; i < scannedTextObj[0].Content.length; i++) {
        var found = scannedTextObj[0].Content[i].Text.search(searchTerm)

        if (found !== -1){

             var temp = { 
            "ISBN": scannedTextObj[0].ISBN, 
            "Page": scannedTextObj[0].Content[i].Page,
            "Line": scannedTextObj[0].Content[i].Line
           }
          
            result.Results.push(temp)
        }
    }

    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}


//Positive test case

const test3ExpectedOut = {
    "SearchTerm" : "myself",
    "Results" : [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

const test3result = findSearchTermInBooks("myself", twentyLeaguesIn);
if (JSON.stringify(test3ExpectedOut) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", test3ExpectedOut);
    console.log("Received:", test3result);
}
console.log("Received:", test3result);

//negative test case

const test4result = findSearchTermInBooks("traitor", twentyLeaguesIn);
if (test4result.Results.length == 0) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected: 0");
    console.log("Received:", test4result.Results.length);
}

console.log("Received:", test4result);

//case-sensitive test case 1
//this should return with Results empty since there is no "Simply" in Contents
const test5result = findSearchTermInBooks("Simply", twentyLeaguesIn);
if (test5result.Results.length == 0) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected: 0");
    console.log("Received:", test5result.Results.length);
}

console.log("Received:", test5result);

//case-sensitive test case 2
//this should return with an entry in Result
const test6ExpectedOut = {
    "SearchTerm" : "simply",
    "Results" : [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

const test6result = findSearchTermInBooks("simply", twentyLeaguesIn);
if (JSON.stringify(test6ExpectedOut) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", test6ExpectedOut);
    console.log("Received:", test6result);
}

console.log("Received:", test6result);

//edge case: Multiple search results found

const test7result = findSearchTermInBooks("and", twentyLeaguesIn);
if (test7result.Results.length > 1)  {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", 2);
    console.log("Received:", test7result.Results.length);
}

console.log("Received:", test7result);

const test8ExpectedOut = {
    "SearchTerm" : "I asked myself",
    "Results" : [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

//edge case: short phrase as search string
const test8result = findSearchTermInBooks("I asked myself", twentyLeaguesIn);
if (JSON.stringify(test8ExpectedOut) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", test8ExpectedOut);
    console.log("Received:", test8result);
}

console.log("Received:", test8result);