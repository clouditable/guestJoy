import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

import '../chart/chart';
import './rated.html';

const data = [52, 13, 18, 24];

Template.rated.onCreated(function helloOnCreated() {
  this.showRatedChart = new ReactiveVar(false)
});

Template.rated.helpers({
  showRatedChart: function () {
    const showChart = Template.instance().showRatedChart.get();
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

Template.rated.events({
  'mouseenter #rated-content': function (event, template) {
    event.preventDefault();
    template.showRatedChart.set(true);
  },
  'mouseleave #rated-content': function (event, template) {
    event.preventDefault();
    template.showRatedChart.set(false);
  }
});