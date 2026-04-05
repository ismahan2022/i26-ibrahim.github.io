# Requirements

## User Needs


### User stories


As a driver I want to know where my nearest car park that is open so when I leave my house I am able to park my car.
As a driver I want to know where my nearest car park that is free so when I leave my house I am able to park my car without needing to pay.
As a driver I want to know where my nearest car park that has enough space so when I leave my house I am able to find space to park my car.

### Actors
TODO: List and describe the actors/users for this product.

The car park system is designed to support two primary actors: drivers, who utilize the service to locate and access parking, and administrators, who oversee system operations and maintain facility-related data.

### Use Cases

| UC1| USE-CASE 1 | 
| -------------------------------------- | ------------------- |
| **Description** | As a driver, I need access to available and secure parking spaces to ensure convenient and safe vehicle storage.|
| **Actors** |Driver|
| **Assumptions** | The driver should has a stable internet connection to access the car park system. </td></tr>
| **Steps** | Open the car park app. Turn on the driver's location. Search for nearby parking. Choose the location. View available spaces. Make payment. |
| **Variations** | If the driver has poor internet connection, the system cannot load parking data or complete payment.|
| **Non-functional** | The payment process must be secure and encrypted.|
| **Issues** | Internet stability and real-time data accuracy |



| UC2 | USE-CASE 2 | 
| -------------------------------------- | ------------------- |
| **Description** | The driver searches for suitable parking in the area they searched for.|
| **Actors** | Driver, Software Developer and Operator.|
| **Assumptions** | The driver has a stable internet connection and knows their location or has access to location services. |
| **Steps** |  The driver opens the app. Browser loads the parking search interface. The driver selects 'Search Location'. Browser retrieves the driver's detected or manually entered location and sends it to the system. Operator ensures the car park data (availability and hours) is accurate and updated in the system. Browser receives the list of car parks from the system. The system displays a list of available car parks and information about the car parks like operating hours and spaces.|
| **Variations** | If no car parks are found then the system displays a “No parking locations nearby” message. The driver has poor internet connection then the system displays a " no internet connection" message. |
| **Non-functional** | Search results must appear within 5 seconds. The map and list interface must be easy to navigate. |
| **Issues** | Real- time data |


| UC3 | USE-CASE 3 | 
| -------------------------------------- | ------------------- |
| **Description** | The driver searches for available parking.|
| **Actors** | Driver, Applicant, Browser and Operator.|
| **Assumptions** | The user has an active internet connection and the parking dataset contains up-to-date information. The system can retrieve pricing, safety facility details and operating hours. |
| **Steps** |  The driver opens the app or website. Browser loads the homepage and displays the “Find Available Parking” option. The driver selects the option to “Find Available Parking”. The system retrieves parking locations and availability data. The system displays safety facility information if relevant and also shows operating hours if necessary. The driver views the results and selects a car park if desired.|
| **Variations** | Operator can manually update availability or remove inaccurate entries. Operating hours may be excluded when not provided by the database.  |
| **Non-functional** | Information must be clear and easy to understand. The system must handle high traffic without performance issues. |
| **Issues** | Inconsistent data if operator updates are delayed. Missing information for some car parks (e.g., safety facilities). Availability may not reflect real-time occupancy. |

| UC4 | USE-CASE 4 | 
| -------------------------------------- | ------------------- |
| **Description** | The driver submits real-time information about a car park such as space availability, closures, or other helpful updates to improve the accuracy of the app for all users.|
| **Actors** | Driver and Admin.|
| **Assumptions** | The driver has a stable internet connection and there is an existing car park selected to attach the update to. |
| **Steps** |  The driver opens the app. The driver selects 'Submit Update'. The driver selects the car park. The user enters details such as spaces, closure, or issues. The system validates the information format. The update is submitted and stored. The update becomes visible to other drivers or flagged for operator review. |
| **Variations** | The update may require approval before appearing publicly. If the user provides incomplete information then the app prompts them to add missing details. |
| **Non-functional** | Updates must appear as quick as possible. The system must prevent spam or repeated duplicate updates. |
| **Issues** | Some updates may be inaccurate or intentionally misleading. Operators may not verify updates immediately. Need for a trust or reputation system to reduce false reports. |

TODO: Your Use-Case diagram should include all use-cases.

# Use-Case diagram 

### Use-Case 1
<img width="436" height="321" alt="UC - 1" src="https://github.com/ismahan2022/i26-ibrahim.github.io/blob/main/docs/images/uc1.png?raw=true" />

### Use-Case 2
<img width="422" height="333" alt="UC - 2" src="https://github.com/ismahan2022/i26-ibrahim.github.io/blob/main/docs/images/uc2.png?raw=true" />

### Use-Case 3
<img width="542" height="338" alt="UC - 3" src="https://github.com/ismahan2022/i26-ibrahim.github.io/blob/main/docs/images/uc3.png?raw=true" />

### Use-Case 4
<img width="542" height="338" alt="UC - 3" src="https://github.com/ismahan2022/i26-ibrahim.github.io/blob/main/UC4.png?raw=true" />

## Software Requirements Specification
### Functional requirements
TODO: create a list of functional requirements. 
    e.g. "The system shall ..."
    Give each functional requirement a unique ID. e.g. FR1, FR2, ...
    Indicate which UC the requirement comes from.
    


FR1- The system shall require users to log in with valid username and passwords before accessing personal data or system features. UC2

FR2- The system shall display available car park information based on the driver's current location, prioritizing car parks nearest to the driver. UC2

FR3- The system shall present detailed information on the safety facilities available at each car park location. UC2

### Non-Functional Requirements
TODO: Consider one or more [quality attributes](https://en.wikipedia.org/wiki/ISO/IEC_9126) to suggest a small number of non-functional requirements.
Give each non-functional requirement a unique ID. e.g. NFR1, NFR2, ...

Indicate which UC the requirement comes from.

NFR1 - The Car Park App shall update the number of available car spaces within 5 seconds of any actual change, ensuring driver receive accurate, up-to-date information about space availability across all car park locations. UC2 (Perfomance)

NFR2- Every car park location shall be equipped with security systems that are monitored and maintained regularly to ensure 24/7 protection of parked vehicles against damage and theft. UC2 (Security)

NFR3 - The Car Park App shall provide immediate feedback within 1 second upon any user interaction, such as tapping a button, to confirm that the system is responding. UC2 (Responsivity)
