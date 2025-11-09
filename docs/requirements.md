# Requirements

## User Needs


### User stories
TODO: Write brief user stories to explain how various actors would interact with the system to accomplish a goal.

As a driver I want to know where my nearest car park that is open so when I leave my house I am able to park my car.
As a driver I want to know where my nearest car park that is free so when I leave my house I am able to park my car without needing to pay.
As a driver I want to know where my nearest car park that has enough space so when I leave my house I am able to find space to park my car.

### Actors
TODO: List and describe the actors/users for this product.

The car park system is designed to support two primary actors: drivers, who utilize the service to locate and access parking, and administrators, who oversee system operations and maintain facility-related data.

### Use Cases
TODO: Describe each use case (at least one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.

| TODO: USE-CASE ID e.g. UC1, UC2, ... | TODO: USE-CASE NAME | 
| -------------------------------------- | ------------------- |
| **Description** | TODO: Goal to be achieved by use case and sources for requirement (As a driver, I need access to available and secure parking spaces to ensure convenient and safe vehicle storage.|
| **Actors** | TODO: List of actors involved in use case (Driver)|
| **Assumptions** | The driver has a stable internet connection to access the car park system. TODO: Pre/post-conditions if any</td></tr>
| **Steps** | Open the car park app/ Search for nearby parking/ Choose location/ View available spaces/ Make payment TODO: Interactions between actors and system necessary to achieve goal |
| **Variations** | The driver has poor internet connection, so the system cannot load parking data or complete payment. TODO: OPTIONAL - Any variations in the steps of a use case |
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. (The payment process must be secure and encrypted. ) |
| **Issues** | (Internet stability and real-time data accuracy) TODO: OPTIONAL - List of issues that remain to be resolved |


TODO: Your Use-Case diagram should include all use-cases.

# Use-Case diagram 

(<img width="428" height="319" alt="Use case final" src="https://github.com/user-attachments/assets/fd210b38-e5c8-41dc-8b8b-f944596c115f" />
 />
>

)

## Software Requirements Specification
### Functional requirements
TODO: create a list of functional requirements. 
    e.g. "The system shall ..."
    Give each functional requirement a unique ID. e.g. FR1, FR2, ...
    Indicate which UC the requirement comes from.
    
The system must request permission to access space availability.

The system should include a login step before allowing users to search car park pricing.

The system must display car park operating hours retrieved from Bristol Open Data.

The system should include safety facility information for each car park location. 

### Non-Functional Requirements
TODO: Consider one or more [quality attributes](https://en.wikipedia.org/wiki/ISO/IEC_9126) to suggest a small number of non-functional requirements.
Give each non-functional requirement a unique ID. e.g. NFR1, NFR2, ...

Indicate which UC the requirement comes from.
