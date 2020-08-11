import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'

import iconTrash from 'images/commonIcons/trash.svg'
import iconEdit from 'images/commonIcons/pencil.svg'
import {Row, Col} from 'reactstrap'

const productData = {
  id: '1',
  name: 'All Products',
  children: [
    {
      id: '2',
      name: 'Business Kit',
    },
    {
      id: '3',
      name: 'Wine Clubs',
    },
    {
      id: '4',
      name: 'Wine',
      children: [
        {
          id: '5',
          name: 'Gift Sets',
        },
        {
          id: '6',
          name: 'Middle Jane',
        },
        {
          id: '7',
          name: 'CANS',
        },
        {
          id: '8',
          name: 'Sparkling',
        },
        {
          id: '9',
          name: 'White',
          children: [
            {
              id: '10',
              name: 'Fruity White',
            },
            {
              id: '11',
              name: 'Earthy White',
            },
            {
              id: '12',
              name: 'Creamy',
            },
            {
              id: '13',
              name: 'Crisp',
            },
          ],
        },
        {
          id: '14',
          name: 'Rosé',
        },
        {
          id: '15',
          name: 'Red',
          children: [
            {
              id: '16',
              name: 'Fruity Red',
            },
            {
              id: '17',
              name: 'Earthy Red',
            },
            {
              id: '18',
              name: 'Bold',
            },
            {
              id: '19',
              name: 'Light',
            },
          ],
        },
      ],
    },
  ],
}

const merchData = {
  id: '20',
  name: 'Merch',
  children: [
    {
      id: '21',
      name: 'Wearables',
    },
    {
      id: '22',
      name: 'Drinkware',
    },
    {
      id: '23',
      name: 'Entertaining',
    },
    {
      id: '24',
      name: 'Marketing Tools',
    },
    {
      id: '25',
      name: 'Giftables',
    },
    {
      id: '26',
      name: 'Holiday',
    },
  ],
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: '95%',
    color: '#403839',
    '& .MuiTypography-body1': {
      fontFamily: 'SFUIText-Semibold',
      fontSize: '14px',
      height: '45px',
      lineHeight: 3.5,
      fontWeight: 600,
      background: 'none ',
      color: '#403839',
      borderBottom: 'solid 1px #ebe9e8',
      '& .action': {
        display: 'none',
        color: '#403839',
      },
    },
    '& .MuiTypography-body1:hover': {
      background: 'none ',
      '& .action': {
        display: 'block',
      },
    },
    '& .MuiCollapse-wrapperInner': {
      marginLeft: '20px',
    },
    '& .Mui-selected > .MuiTreeItem-content': {
      color: '#de8b6d',
      '& .MuiTypography-body1': {
        background: 'none',
        color: '#de8b6d',
        '& .action': {
          color: '#403839',
        },
      },
      '& .MuiTypography-body1:hover': {
        background: 'none',
        color: '#de8b6d',
      },
    },
  },
})

const DataTreeView = () => {
  const classes = useStyles()

  const [expanded, setExpanded] = useState([])
  const [selected, setSelected] = useState([])

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds)
  }

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds)
  }

  const customTreeItemLabel = (label) => {
    return (
      <Row className="pr-4 pr-lg-0">
        <Col>{label}</Col>
        <Col sm={2} xs={1} lg={2} className="action my-auto">
          <Row>
            <img src={iconEdit} className="mr-2" />
            <span className="d-none d-lg-block">Edit</span>
          </Row>
        </Col>
        <Col sm={3} xs={1} lg={3} className="action my-auto">
          <Row>
            <img src={iconTrash} className="mr-2" />
            <span className="d-none d-lg-block">Delete</span>
          </Row>
        </Col>
      </Row>
    )
  }

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={customTreeItemLabel(nodes.name)}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  )

  return (
    <TreeView
      className={classes.root}
      defaultExpandIcon={<i className="fa fa-caret-right" aria-hidden="true" />}
      defaultExpanded={['1']}
      defaultCollapseIcon={<i className="fa fa-caret-down" aria-hidden="true" />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      multiSelect
      onNodeSelect={handleSelect}>
      {renderTree(productData)}
      <TreeItem nodeId="exclusive_pricing" label={customTreeItemLabel('Exclusive Pricing')} />
      <TreeItem nodeId="circle_exclusives" label={customTreeItemLabel('Circle Exclusives')} />
      <TreeItem nodeId="wcout_circle_tasting" label={customTreeItemLabel('Scout Circle Tasting')} />
      <TreeItem nodeId="Wilderness_road" label={customTreeItemLabel('Wilderness Road')} />
      <TreeItem nodeId="epic_pursuit" label={customTreeItemLabel('Epic Pursuit')} />
      {renderTree(merchData)}
      <TreeItem key="gift_cards" nodeId="Gift Cards" label={customTreeItemLabel('Gift Cards')} />
    </TreeView>
  )
}

export default DataTreeView
