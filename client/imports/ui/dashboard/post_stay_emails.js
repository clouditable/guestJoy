import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

import '../chart/chart';
import './post_stay_emails.html';

const data = [14, 17, 18, 17];

Template.postStayEmails.onCreated(function () {
  this.showPostStayChart = new ReactiveVar(false)
});

Template.postStayEmails.helpers({
  showPostStayChart: function () {
    const showChart = Template.instance().showPostStayChart.get();
    return showChart;
  },
  data: function () {
    return data;
  },
  thisMonth: function () {
    return data[data.length - 1];
  },
  lastDifference: function () {
    const difference = data[data.length - 1] - data[data.length - 2];
    if (difference < 0) {
      return `<p style="color:red">last week ${difference * -1}   <i class="fa fa-angle-down" aria-hidden="true"></i></p>`
    } else {
      return `<p style="color:green">last week ${difference}   <i class="fa fa-angle-up" aria-hidden="true"></i></p>`
    }
  }
});

Template.postStayEmails.events({
  'mouseenter #post-stay-content': function (event, template) {
    event.preventDefault();
    template.showPostStayChart.set(true);
  },
  'mouseleave #post-stay-content': function (event, template) {
    event.preventDefault();
    template.showPostStayChart.set(false);
  }
});
