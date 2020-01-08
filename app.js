// Complete the function that takes two integers
// (a, b, where a < b) and return an array of all integers
//  between the input parameters, including them.


function between(a, b) {
    //take a and add 1 until it gets to b. 
    let array = [];
    while(a <= b){
    let num = a++
    array.push(num);
    }
    return array;
    }

    // describe("Basic tests", () => {
    //     it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
    //     it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
    //   });

    //***************************************************************



    // You are given an array of a journey in London, UK.
    // The array will contain bus numbers and TFL tube names
    // as strings e.g.
//     Journeys will always only contain a combination of
//     tube names and bus numbers. Each tube journey costs
//     £2.40 and each bus journey costs £1.50. If there are
//     2 or more adjacent bus journeys, the bus fare is capped
//     for sets of two adjacent buses and calculated as one bus
//     fare for each set.

// Your task is to calculate the total cost of the journey
// and return the cost rounded to 2 decimal places in the format
// (where x is a number): £x.xx
    
    function londonCityHacker(journey) {
        let sum = 0;
        
        for (let i = 0; i < journey.length; i++) {
          if (typeof journey[i] === "string") sum += 2.40;
          else {
            sum += 1.50;
            if (typeof journey[i + 1] === "number") i++;
          }  
        }
        
        return `£${sum.toFixed(2)}`;
      }

//       Test.assertEquals(londonCityHacker([12, 'Central', 'Circle', 21]), "£7.80");
// Test.assertEquals(londonCityHacker(['Piccidilly', 56]), "£3.90");
// Test.assertEquals(londonCityHacker(['Northern', 'Central', 'Circle']), "£7.20");
// Test.assertEquals(londonCityHacker(['Piccidilly', 56, 93, 243]), "£5.40");
// Test.assertEquals(londonCityHacker([386, 56, 1, 876]), "£3.00");
// Test.assertEquals(londonCityHacker([]), "£0.00");