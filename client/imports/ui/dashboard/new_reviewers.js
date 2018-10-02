import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

import '../chart/chart';
import './new_reviewers.html';

const data = [3, 7, 8, 5];

Template.newReviewers.onCreated(function helloOnCreated() {
  this.showNewReviewerChart = new ReactiveVar(false)
});

Template.newReviewers.helpers({
  showNewReviewerChart: function () {
    const showChart = Template.instance().showNewReviewerChart.get();
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

Template.newReviewers.events({
  'mouseenter #new-reviewer-content': function (event, template) {
    event.preventDefault();
    template.showNewReviewerChart.set(true);
  },
  'mouseleave #new-reviewer-content': function (event, template) {
    event.preventDefault();
    template.showNewReviewerChart.set(false);
  }
});
