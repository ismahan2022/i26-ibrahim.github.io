# Testing

## Test Plan


The system was tested using a set of manual and automated test cases, each identified by a unique ID. For every test case, I defined the prerequisites, such as loading the app, having an internet connection, or providing search terms. Manual testing involved performing actions like typing a search term, clicking buttons, or selecting map markers, and then checking whether the app showed the correct results, such as matching car parks, CCTV information, or error messages. I also described how automated unit tests could be used to check the same behaviour in code, for example by calling the search function with test data and confirming that it returns the expected output. This combination of manual steps and simple automated checks ensures that all features work as intended.

## Requirements Traceability Matrix

| Use-Case ID | Requirement ID | Software module      | Test case ID | Status |
|-------------|----------------|----------------------|--------------|--------|
| UC1         | FR1.1          | Carparkfinder.html | TF1.1        | pass   |
| UC1         | FR1.2          | Carparkfinder.html | TF1.2        | pass   |
| UC2         | FR2.1          | Carparkfinder.html | TF2.1        | pass   |
| UC2         | FR2.2          | Carparkfinder.html | TF2.2        | fail   |
| UC2         | FR3.1          | Carparkfinder.html | TNF3.1       | pass   |
| UC2         | FR3.2          | Carparkfinder.html | TNF3.2       | pass   |
| UC2         | NFR4.1         | Carparkfinder.html | TNF4.1       | pass   |
| UC2         | NFR4.2         | Carparkfinder.html | TNF4.2       | pass   |
| UC3         | NFR5.1         | Carparkfinder.html | TNF5.1       | pass   |
| UC3         | NFR5.2         | Carparkfinder.html | TNF5.2       | pass   |
| UC2         | NFR6.1         | Carparkfinder.html | TNF6.1       | pass   |
| UC2         | NFR6.2         | Carparkfinder.html | TNF6.2       | pass   |

## Test Plan
| Requirement ID | Test Case ID | Inputs/ Precondition           | Expected output                                               |
|----------------|--------------|--------------------------------|---------------------------------------------------------------|
| FR1            | TC1.1        | Valid search term              | System displays matching car parks                            |
| FR1            | TC1.2        | Empty search field             | System displays nothing                                       |
| FR2            | TC2.1        | Dataset loaded                 | App displays nearest car park from the dataset                |
| FR2            | TC2.2        | Dataset loaded fail            | App displays ""No car parks nearby""                          |
| FR3            | TC3.1        | Car park safety data available | App displays safety facilities (Eg. CCTV: included)           |
| FR3            | TC3.2        | Safety data missing            | App displays ""CCTV: NO""                                     |
| NFR1           | TC4.1        | Normal internet connection     | App will update within 5 seconds                              |
| NFR1           | TC4.2        | Slow internet connection       | System will update within 5 seconds or show loading indicator |
| NFR2           | TC5.1        | CCTV/ Security data available  | App displays ""Yes""                                          |
| NFR2           | TC5.2        | CCTV/ Security data missing    | App will display ""Security information unavailable""         |
| NFR3           | TC6.1        | User clicks a button           | App will responds within 2 seconds                            |
| NFR3           | TC6.2        | Driver using an Android phone  | App will responds within 1 seconds                            
