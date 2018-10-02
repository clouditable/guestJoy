import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

import '../chart/chart';
import './concierge_visits.html';

const data = [18, 21, 48, 33];

Template.conciergeVisits.onCreated(function helloOnCreated() {
  this.showVisitsChart = new ReactiveVar(false)
});

Template.conciergeVisits.helpers({
  showVisitsChart: function () {
    const showChart = Template.instance().showVisitsChart.get();
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

Template.conciergeVisits.events({
  'mouseenter #visit-content': function (event, template) {
    event.preventDefault();
    template.showVisitsChart.set(true);
  },
  'mouseleave #visit-content': function (event, template) {
    event.preventDefault();
    template.showVisitsChart.set(false);
  }
});
