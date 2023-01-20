var myUserUtil2 = Class.create();
myUserUtil2.prototype = {
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
		} else if (gr.get('user_name', 'admin')) {
			user_sys_id = gr.getUniqueValue();
		}
		return user_sys_id;
	},

	deleteUser: function (user_sys_id) {
		// delete selected user account
		var gr = new GlideRecord('sys_user');
		gr.get(user_sys_id);
		gr.deleteRecord();
	},

	getUserCount: function () {
		// how many users do we have in the system?
		var gr = new GlideRecord('sys_user');
		gr.query();
		return gr.getRowCount();

	},

	type: 'myUserUtil2'
};