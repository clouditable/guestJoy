import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

import '../chart/chart';
import './special_requests.html';
import '../modal/modal';

const data = [5, 3, 5, 2];

Template.specialRequests.onCreated(function() {
  this.showSpecialChart = new ReactiveVar(false)
});

Template.specialRequests.helpers({
  showSpecialChart: function () {
    const showChart = Template.instance().showSpecialChart.get();
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

Template.specialRequests.events({
  'mouseenter #special-content': function (event, template) {
    event.preventDefault();
    template.showSpecialChart.set(true);
  },
  'mouseleave #special-content': function (event, template) {
    event.preventDefault();
    template.showSpecialChart.set(false);
  }
});
