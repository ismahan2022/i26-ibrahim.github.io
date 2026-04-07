# Testing

## Test Plan
TODO: Describe any manual and automated (unit) tests. Uniquely identify each test case. Include prerequisites and test data.

The system was tested using a set of manual and automated test cases, each identified by a unique ID. For every test case, I defined the prerequisites, such as loading the app, having an internet connection, or providing search terms. Manual testing involved performing actions like typing a search term, clicking buttons, or selecting map markers, and then checking whether the app showed the correct results, such as matching car parks, CCTV information, or error messages. I also described how automated unit tests could be used to check the same behaviour in code, for example by calling the search function with test data and confirming that it returns the expected output. This combination of manual steps and simple automated checks ensures that all features work as intended.


Test Runs
TODO: For each test described above, indicate the current status. 
Create a requirements traceability matrix to validate the completeness of the product.

| Use-Case ID | Requirement ID | Software module      | Test case ID | Status |
|-------------|----------------|----------------------|--------------|--------|
| UC1         | FR1.1          | Car Park Finder.html | TF1.1        | pass   |
| UC1         | FR1.2          | Car Park Finder.html | TF1.2        | pass   |
| UC2         | FR2.1          | Car Park Finder.html | TF2.1        | pass   |
| UC2         | FR2.2          | Car Park Finder.html | TF2.2        | fail   |
| UC2         | FR3.1          | Car Park Finder.html | TNF3.1       | pass   |
| UC2         | FR3.2          | Car Park Finder.html | TNF3.2       | pass   |
| UC2         | NFR4.1         | Car Park Finder.html | TNF4.1       | pass   |
| UC2         | NFR4.2         | Car Park Finder.html | TNF4.2       | pass   |
| UC3         | NFR5.1         | Car Park Finder.html | TNF5.1       | pass   |
| UC3         | NFR5.2         | Car Park Finder.html | TNF5.2       | pass   |
| UC2         | NFR6.1         | Car Park Finder.html | TNF6.1       | pass   |
| UC2         | NFR6.2         | Car Park Finder.html | TNF6.2       | pass   |
