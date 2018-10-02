import { Template } from 'meteor/templating';
import './modal.html';

Template.chartModal.onRendered(function() {

});

Template.chartModal.helpers({
  data: function() {
    return this.data;
  }
})