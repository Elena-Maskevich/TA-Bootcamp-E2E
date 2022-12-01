Feature: Bootcamp E2E
Background: 
     Given on the home page
     Given I refresh page

Scenario Outline: Search bar
When I search the word <item> 
Then I check that at least one item appears

Examples: 
     |item|
     |Windows|

Scenario Outline:  Internet shop logo button
When I open tab <tab>
* I click on the Internet shop logo
Then I check that the main page opened

Examples:
|tab|
|Today's Best deals|

