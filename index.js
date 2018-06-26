// const json = require('json')
// const jQuery = require('jquery')

// 1. parse the json test data
// 2. reiterate through each url
// Test 1
// Visit `address` `p1`, visit `links` `p2`
// Skip `address` `p2`
// Visit `address` `p4`, Visit `links` `p5`
// Visit `address` `p6`, Visit `links` `p7`

// Test 2
// Visit `address` `p1`, visit `links` `p2`
// Skip `address` `p2` because already visited
// Visit `links` `p3`, skip `address` `p3`
// Visit `address` `p4`, visit `links` `p5`

// 3. if any characters in the strings are the same, skip that URL
// 4. else add the URL to the unique list



const data = {
  "pages": [
    {
      "address":"http://foo.bar.com/p1",
      "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4"]
    },
    {
      "address":"http://foo.bar.com/p2",
      "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p4"]
    },
    {
      "address":"http://foo.bar.com/p4",
      "links": ["http://foo.bar.com/p5", "http://foo.bar.com/p1", "http://foo.bar.com/p6"]
    },
    {
      "address":"http://foo.bar.com/p5",
      "links": []
    },
    {
      "address":"http://foo.bar.com/p6",
      "links": ["http://foo.bar.com/p7", "http://foo.bar.com/p4", "http://foo.bar.com/p5"]
    }
  ]
}

// 1. Returns the list of page addresses it crawled successfully

let totalUniques = Object.keys(data.pages).length
let result = []

for (let i = 0; i < data.pages.length; i++) {
  // console.log(typeof data.pages[i].address) // string * 5
  // console.log(data.pages[i].address, i)
  // console.log(data.pages[i].links[0], typeof data.pages[i].links[0])
  // result.push(data.pages[i].address, data.pages[i].links)
  // console.log(data.pages[i].address == data.pages[i].links[0])
  result.push(data.pages[i].address, data.pages[i].links[0])
  //
  uniqueList = result.filter(function(item, i) {
    return result.indexOf(item) == i
  })
}

console.log("Total Uniques: " + totalUniques)
console.log("Total Uniques: " + uniqueList + "\n")


// 2. The list of duplicate page addresses it skipped

let TotalDuplicates = Object.keys(data.pages).length
let dupResult = []

for (let i = 0; i < data.pages.length; i++) {
  // console.log(data.pages[i].address)
  // console.log(data.pages[i].links[0])
  // dupResult.push(data.pages[i].address, data.pages[i].links)
  dupResult.push(data.pages[i].address, data.pages[i].links[0])

  // Removes duplicates from the new Array:
  duplicateList = dupResult.filter(function(item, i) {
    return dupResult.indexOf(item) != i
  })
}
console.log("Duplicates: " + TotalDuplicates)
console.log("Duplicates list: " + duplicateList + "\n")




// 3. The list of invalid page addresses it skipped

let invalidPages = Object.keys(data.pages).length
let invalidResult = []

for (let i = 0; i < data.pages.length; i++) {

}

console.log("Invalid Pages:" + invalidPages)
console.log("Invalid Pages list: " + invalidResult)
