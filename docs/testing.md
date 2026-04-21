# Testing

## Test Plan


The system was tested using a set of manual and automated test cases, each identified by a unique ID. For every test case, I defined the prerequisites, such as loading the app, having an internet connection, or providing search terms. Manual testing involved performing actions like typing a search term, clicking buttons, or selecting map markers, and then checking whether the app showed the correct results, such as matching car parks, CCTV information, or error messages. I also described how automated unit tests could be used to check the same behaviour in code, for example by calling the search function with test data and confirming that it returns the expected output. This combination of manual steps and simple automated checks ensures that all features work as intended.

## Requirements Traceability Matrix

| Use-Case ID | Requirement ID | Software module      | Test case ID | Status |
|-------------|----------------|----------------------|--------------|--------|
| UC1         | FR1            | Carparkfinder.html   | TC1.1        | pass   |
| UC1         | FR1            | Carparkfinder.html   | TC1.2        | pass   |
| UC2         | FR2            | Carparkfinder.html   | TC2.1        | pass   |
| UC2         | FR2            | Carparkfinder.html   | TC2.2        | pass   |
| UC3         | FR3            | map.html             | TC3.1        | pass   |
| UC3         | FR3            | map.html             | TC3.2        | pass   |
| UC4         | NFR1           | Reviews.html         | TC4.1        | pass   |
| UC4         | NFR1           | Reviews.html         | TC4.2        | pass   |
| UC3         | NFR2           | map.html             | TC5.1        | pass   |
| UC3         | NFR2           | map.html             | TC5.2        | pass   |
| UC2         | NFR3           | Carparkfinder.html   | TC6.1        | pass   |
| UC2         | NFR3           | Carparkfinder.html   | TC6.2        | pass   |

## Test Plan
| Requirement ID | Test Case ID | Inputs/ Precondition                           | Expected output                                           |
|----------------|--------------|------------------------------------------------|-----------------------------------------------------------|
| FR1            | TC1.1        |Input "Ducie" into search                       | System displays matching car park results                 |
| FR1            | TC1.2        |Input in search is empty and search is clicked  | System displays all car parks                             |
| FR2            | TC2.1        | Dataset loads successfully                     | App displays nearest car park from the dataset         | 
| FR2            | TC2.2        | Dataset doesnt load                            | App displays No car parks nearby                          |
| FR3            | TC3.1        | Car park data is available                     | Map displays facilities like CTTV                         |
| FR3            | TC3.2        | Car park data is not available                 | App handles null and displays not available or equivalent |
| NFR1           | TC4.1        | Change in space availability                   | App will update within 5 seconds                          |
| NFR1           | TC4.2        | Submit is clicked when reveiw is inputted      | Review form hides and the "Success Message" displays      |
| NFR2           | TC5.1        | Safety data available                          | App displays CCTV: Yes                                    |
| NFR2           | TC5.2        | Safety data missing i.e null                   | App displays CCTV: NO                                     |
| NFR3           | TC6.1        | User clicks any button                         | System provides feedback/response within 1 second         |
| NFR3           | TC6.2        | User using moblie device                       | UI remains responsive with no lag over 1 second           |

