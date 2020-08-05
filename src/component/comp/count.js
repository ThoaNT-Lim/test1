import React from 'react';
import { TreeSelect } from 'antd';

const { TreeNode } = TreeSelect;

class Count extends React.Component {
  state = {
    value: undefined,
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        showSearch
        style={{ width: '100%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Số lượng *"
        allowClear
        multiple
        treeDefaultExpandAll
        onChange={this.onChange}
      >
          <TreeNode value="1" title="1">
          </TreeNode>
          <TreeNode value="2" title="2">
          </TreeNode>
          <TreeNode value="3" title="3">
          </TreeNode>
          <TreeNode value="4" title="4">
          </TreeNode>
          <TreeNode value="5" title="5">
          </TreeNode>
      </TreeSelect>
    );
  }
}

export default Count;