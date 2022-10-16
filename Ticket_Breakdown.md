# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
**Ticket 1. Create a new column named as CustomAgentID in Shifts Table**
   1. Default value for this can be Null
   2. Acceptance criteria
      1. A new column called CustomAgentID is created in Shifts Table
   3. Estimation
      1. Small task should be done in half a day as only a query needs to run to add a column
      2. if orm is being used than add that into data model and update the orm configs to reflect the same in db

**Ticket 2. Update the existing Create Shift API to let the users modify/assign CustomAgentID**
   1. In backend update CreateShiftAPI to make sure users can assign their own Agents id
   2. Acceptance criteria
      1. User is able to assign Custom Agent id if its not already created 
      2. If its already created than it should throw the error that its already assigned
      3. unit tests updated
      4. integration tests updated
   3. Estimation
      1. Medium task should be done in 2-3 developer days with all unit testing and integration changes
      
**Ticket 3. Update Frontend Create Shift form to add a new Column Called Custom Agent ID**
    1.  User is able to Assign the Custom agent id if it's not allotted otherwise its preallocate.
    2. If its already created than input box should be disabled
    3. Acceptance criteria
        1. A new input box in the form is created
        2. Integrate GetCustomAgentID api when new Shift is getting created.
        2. Should be disabled if the value is already prefilled with the Get API
        3. unit tests updated
        4. integration tests updated
    4. Estimation
        1. Medium task should be done in 2-3 developer days with all unit testing and integration changes
**4. Create a New GetCustomAgentID API which takes AgentId and FacilityId as input and return CustomAgentID** 
    1. Client is able to retrieve the CustomAgentId with given agentId and FacilityId.
    3. Acceptance criteria
        1. User gets the CustomAgentId with given agentId and FacilityId
        2. If its not created response should be empty string.
        3. unit tests created
        4. integration tests created
    4. Estimation
        1. Medium task should be done in 1-2 developer days with all unit testing and integration changes.

**5. Update generateReport and getShiftsByFacility to return CustomAgentId**
    1. Modify GenerateReport api to return additional column called  CustomAgentId.
    2. Modify getShiftsByFacility api to return additional column called  CustomAgentId.
    3. Acceptance criteria
        1. GenerateReport api has CustomAgentId in response
        2. GetShiftsByFacility api has CustomAgentId in response
        3. unit tests created
        4. integration tests created
    4. Estimation
        1. Medium task should be done in 1-2 developer days with all unit testing and integration changes.


## Assumptions
1. New table creation is not allowed. If it is allowed than ticket 1 will be about creating this new table called AgentFacilityIdMap which stores these custom agent id along with internal agent id and facility id.
2. This table will then be used as reference everywhere.