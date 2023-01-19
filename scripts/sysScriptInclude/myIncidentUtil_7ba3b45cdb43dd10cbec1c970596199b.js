var myIncidentUtil = Class.create();
myIncidentUtil.prototype = {
    initialize: function() {
    },

	deleteIncident: function(inc_sys_id) {
		// Delete selected Incident
		gs.sql("DELETE FROM incident WHERE sys_id=" + inc_sys_id); // dummy statement - this won't work, but should be caught by tests
        gs.log("Deleted incident with sys_id " + inc_sys_id);
	},
	
	cleanIncidentTable: function(user_sys_id) {
        // delete all records from the Incident table
        gs.sql("DELETE FROM incident"); // dummy statement - this won't work, but should be caught by tests
        gs.log("deleted all incidents using SQL");
    },
	
    type: 'myIncidentUtil'
};