import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

import '../chart/chart';
import './completed_survey.html';

const data = [12, 7, 8, 13];

Template.completedSurvey.onCreated(function helloOnCreated() {
  this.showSurveyChart = new ReactiveVar(false)
});

Template.completedSurvey.helpers({
  showSurveyChart: function () {
    const showChart = Template.instance().showSurveyChart.get();
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

Template.completedSurvey.events({
  'mouseenter #survey-content': function (event, template) {
    event.preventDefault();
    template.showSurveyChart.set(true);
  },
  'mouseleave #survey-content': function (event, template) {
    event.preventDefault();
    template.showSurveyChart.set(false);
  }
});
