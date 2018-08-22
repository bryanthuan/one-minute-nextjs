import {Component } from 'react'
import fetch from '../lib/fetch';
import Page from '../components/page';

const User = ({user}) => (
  <div>
    <h1>{user.id}</h1>
    <div>Created: {user.created}</div>
    <div>Karma: {user.karma}</div>
    <div className='about' dangerouslySetInnerHTML={
      {__html:user.about||''}
    }></div>
    <style jsx>{`
    {
      padding: 3px;
    }
    .about {
      padding-top: 15px;
      word-break: break-word
    }
    `}</style>
  </div>
)
export default class extends Component {
  static async getInititialProps({query}){
    return {
      user: await fetch(`/user/${query.id}`)
    }
  }
  render(){
    return (
      <Page>
        {this.props.user}
        <User user={this.props.user} />
      </Page>
    )
  }
}