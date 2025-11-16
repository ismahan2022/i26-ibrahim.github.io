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
| **Description** | TODO: Goal to be achieved by use case and sources for requirement (As a driver, I need access to available and secure parking spaces to ensure convenient and safe vehicle storage.|
| **Actors** | TODO: List of actors involved in use case (Driver)|
| **Assumptions** | The driver has a stable internet connection to access the car park system. TODO: Pre/post-conditions if any</td></tr>
| **Steps** | Open the car park app/ Search for nearby parking/ Choose location/ View available spaces/ Make payment TODO: Interactions between actors and system necessary to achieve goal |
| **Variations** | The driver has poor internet connection, so the system cannot load parking data or complete payment. TODO: OPTIONAL - Any variations in the steps of a use case |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. (The payment process must be secure and encrypted. ) |
| **Issues** | (Internet stability and real-time data accuracy) TODO: OPTIONAL - List of issues that remain to be resolved |



| UC2 | USE-CASE 2 | 
| -------------------------------------- | ------------------- |
| **Description** | The driver searches for suitable parking in the area they searched for.|
| **Actors** | Driver, Software Developer and Operator.|
| **Assumptions** | The driver has a stable internet connection and knows their location or has access to location services. |
| **Steps** |  The driver opens the app. The driver selects 'Search Location'. The system retrieves car parks in the selected or detected location. The system displays a list of available car parks and information about the car parks like operating hours and pricing. The driver than makes payments if needed with operator. |
| **Variations** | If no car parks are found then the system displays a “No parking locations nearby” message. The driver has poor internet connection then the system displays a " no internet connection" message. |
| **Non-functional** | Search results must appear within 5 seconds. The map and list interface must be easy to navigate. |
| **Issues** | Real- time data |


| UC3 | USE-CASE 3 | 
| -------------------------------------- | ------------------- |
| **Description** | The driver searches for avaiable parking.|
| **Actors** | Driver, Applicant, Browser and Operator.|
| **Assumptions** | The user has an active internet connection and the parking dataset contains up-to-date information. The system can retrieve pricing, safety facility details and operating hours. |
| **Steps** |  The user opens the app or website. The user selects the option to “Find Available Parking”. The system retrieves parking locations and availability data. The system displays safety facility information if relevant and also shows pricing information and only shows operating hours if necessary. The user views the results and selects a car park if desired.|
| **Variations** | Operator can manually update availability or remove inaccurate entries. Operating hours may be excluded when not provided by the database.  |
| **Non-functional** | Information must be clear and easy to understand. The system must handle high traffic without performance issues. |
| **Issues** | Inconsistent data if operator updates are delayed. Missing information for some car parks (e.g., safety facilities). Availability may not reflect real-time occupancy. |

| UC4 | USE-CASE 4 | 
| -------------------------------------- | ------------------- |
| **Description** | The driver submits real-time information about a car park such as space availability, closures, pricing changes or other helpful updates to improve the accuracy of the app for all users.|
| **Actors** | Driver and Admin.|
| **Assumptions** | The driver has a stable internet connection and there is an existing car park selected to attach the update to. |
| **Steps** |  The driver opens the app. The driver selects 'Submit Update'. The driver selects the car park. The user enters details such as spaces, closure, price changes or issues. The system validates the information format. The update is submitted and stored. The update becomes visible to other drivers or flagged for operator review. |
| **Variations** | The update may require approval before appearing publicly. If the user provides incomplete information then the app prompts them to add missing details. |
| **Non-functional** | Updates must appear as quick as possible. The system must prevent spam or repeated duplicate updates. |
| **Issues** | Some updates may be inaccurate or intentionally misleading. Operators may not verify updates immediately. Need for a trust or reputation system to reduce false reports. |

TODO: Your Use-Case diagram should include all use-cases.

# Use-Case diagram 

<img width="436" height="321" alt="UC - 1" src="https://github.com/user-attachments/assets/8b2ed0da-0a2b-4a48-9ad9-b5ec0040f27f" />
<img width="422" height="333" alt="UC - 2" src="https://github.com/user-attachments/assets/577503fe-78f1-44c3-9810-7be215deaff9" />

<img width="542" height="338" alt="UC - 3" src="https://github.com/user-attachments/assets/b5eea73e-028a-4251-9d2b-e218425c2aee" />

<img width="542" height="338" alt="UC4" src="UC4.png" />
## Software Requirements Specification
### Functional requirements
TODO: create a list of functional requirements. 
    e.g. "The system shall ..."
    Give each functional requirement a unique ID. e.g. FR1, FR2, ...
    Indicate which UC the requirement comes from.
    

FR1- The system should include a login step before allowing users to search car park pricing. UC2

FR2- The system must display car park operating hours retrieved from Bristol Open Data. UC2

FR3- The system should include safety facility information for each car park location. UC2

### Non-Functional Requirements
TODO: Consider one or more [quality attributes](https://en.wikipedia.org/wiki/ISO/IEC_9126) to suggest a small number of non-functional requirements.
Give each non-functional requirement a unique ID. e.g. NFR1, NFR2, ...

Indicate which UC the requirement comes from.

NFR1 - The Car Park App shall update the number of available car spaces within 5 seconds of any actual change, ensuring driver receive accurate, up-to-date information about space availability across all car park locations. UC2

NFR2- Every car park location shall be equipped with security systems that are monitored and maintained regularly to ensure 24/7 protection of parked vehicles against damage and theft. UC2

NFR3 - The Car Park App shall provide immediate feedback within 1 second upon any user interaction, such as tapping a button, to confirm that the system is responding. UC2
