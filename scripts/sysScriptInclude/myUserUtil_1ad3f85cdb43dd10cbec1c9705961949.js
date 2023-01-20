var myUserUtil = Class.create();
myUserUtil.prototype = {
	initialize: function () {
	},

	getUser: function (search_value) {
		// Return the sys_id of the searched for user, or the admin sys_id if user_name or user full name not matched
		user_sys_id = '';
		var gr = new GlideRecord('sys_user');
		if (gr.get('user_name', search_value)) {
			user_sys_id = gr.getUniqueValue();
		}
		else if (gr.get('name', search_value)) {
			user_sys_id = gr.getUniqueValue();
		} else {
			user_sys_id = "6816f79cc0a8016401c5a33be04be441"; // system administrator sys_id
		}
		return user_sys_id;
	},

	deleteUser: function (user_sys_id) {
		// delete selected user account
		gs.sql("DELETE FROM sys_user WHERE sys_id=" + user_sys_id); // delete user with sql
	},

	type: 'myUserUtil'
};