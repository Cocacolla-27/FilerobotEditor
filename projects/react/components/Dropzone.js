import React, { Component } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import {
  HeaderWrapper, HeaderTop, Title, ButtonsWrapper, ToolbarWrapper, CancelBtn, Button, CloseBtn
} from '../../styledComponents';
import { Toolbar } from '../';
import { ON_CLOSE_STATUSES } from '../../config';


export default class extends Component {
  render() {

    // const {
    //   activeTab, onRevert, apply, onClose, processWithCloudService, processWithFilerobot,
    //   handleSave, t, config
    // } = this.props;
    // const { tools, closeButtonProps, noCapitalStrs } = config;
    // const isOneTool = tools.length === 1;
    // const filteredName = activeTab === 'rotate' ? 'orientation' : activeTab;
    // const onFinishButtonLabel = (!processWithCloudService && !processWithFilerobot) ? t['toolbar.download'] : t['toolbar.save'];

    return (
      <>
        <DropzoneArea />
      </>
    )
  }
}