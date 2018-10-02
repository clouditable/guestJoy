import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

import './main.html';
import './imports/ui/dashboard/welcome_emails';
import './imports/ui/dashboard/concierge_visits';
import './imports/ui/dashboard/orders';
import './imports/ui/dashboard/special_requests';
import './imports/ui/dashboard/post_stay_emails';
import './imports/ui/dashboard/rated';
import './imports/ui/dashboard/completed_survey';
import './imports/ui/dashboard/new_reviewers';


Template.test.onCreated(function () {
  this.chartData = new ReactiveVar([])
});

Template.test.helpers({
  data: function () {
    const data = Template.instance().chartData.get();
    return data;
  }
});

Template.test.events({
'mouseenter #welcome-content': function (event, template) {
    event.preventDefault();
    const data = [55, 31, 84, 92];
    template.chartData.set(data);
  },
});
