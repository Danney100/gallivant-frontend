import React, {useState} from 'react'
import {Row, Col, Modal, ModalBody, ModalHeader, Media, ListGroupItem} from 'reactstrap'
import ModelTable from '../ModelTable'
import CommonDemo from 'routes/components/CommonDemo'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  imageSize: {
    height: 25,
    padding: 3,
    marginRight: 8,
  },
  buttonSize: {
    cursor: 'pointer',
    padding: 4,
    width: 130,
  },
  imgSize: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
})

const TransactionButton = () => {
  const classes = useStyles()
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  )
  const DemoTwo =
    'The transactions that belong to the selected Sky Wallet balance are displayed here.'

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Transactions
        </ModalHeader>
        <ModalBody>
          <CommonDemo content={DemoTwo} />
          <ModelTable />
        </ModalBody>
      </Modal>
      <div color="link" onClick={toggle} className={classes.buttonSize}>
        <Row>
          <Col sm="2">
            <div className={classes.imgSize}>
              <i className="fa fa-usd ml-2 mr-1"></i>
            </div>
          </Col>
          <Col sm="9">Transactions</Col>
        </Row>
      </div>
    </div>
  )
}

export default TransactionButton
