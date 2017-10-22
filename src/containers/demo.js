import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Layout,Row,Col } from 'antd'
import {changeName} from '../actions/actions'
import Card from '../components/Card'
import Dialog from '../components/Dialog'
import Side from '../components/SiderBar'
import '../styles/siderbar.css'

class Demo extends Component{
    render () {
        return <div className="g-index">
                <Side/>
        </div>
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        changeName () {
            dispatch(changeName('玛丽2号'))
        },
        showDialog () {
            dispatch({
                type: 'SHOW_DIALOG'
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Demo)