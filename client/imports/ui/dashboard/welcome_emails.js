import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'


import '../chart/chart';
import './welcome_emails.html';
import '../modal/modal';

const data = [55, 31, 84, 92];

Template.welcomeEmails.onCreated(function () {
  this.showWelcomeChart = new ReactiveVar(false)
});

Template.welcomeEmails.helpers({
  showWelcomeChart: function () {
    const showChart = Template.instance().showWelcomeChart.get();
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

Template.welcomeEmails.events({
  'mouseenter #welcome-content': function (event, template) {
    event.preventDefault();
    template.showWelcomeChart.set(true);
  },
  'mouseleave #welcome-content': function (event, template) {
    event.preventDefault();
    template.showWelcomeChart.set(false);
  },
  'click #welcome-content': function (event, template) {
    console.log(template)

  }
});
