import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

import '../chart/chart';
import './orders.html';

const data = [52, 13, 19, 43];

Template.orders.onCreated(function helloOnCreated() {
  this.showOrdersChart = new ReactiveVar(false)
});

Template.orders.helpers({
  showOrdersChart: function () {
    const showChart = Template.instance().showOrdersChart.get();
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

Template.orders.events({
  'mouseenter #order-content': function (event, template) {
    event.preventDefault();
    template.showOrdersChart.set(true);
  },
  'mouseleave #order-content': function (event, template) {
    event.preventDefault();
    template.showOrdersChart.set(false);
  }
});
