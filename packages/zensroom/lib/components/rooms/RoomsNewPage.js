/*

Page for inserting a new room

*/

import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

// import RoomsNewForm from './RoomsNewForm';

const RoomsNewPage = () =>

  <div className="page">
    <h2 className="page-title"><FormattedMessage id="rooms.create_new"/></h2>
    <Components.RoomsNewForm />
  </div>

registerComponent('RoomsNewPage', RoomsNewPage);

export default RoomsNewPage;