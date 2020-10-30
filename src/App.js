import Header from './component/Header/Header';
import Headline from './component/Headline/Headline';
import './App.scss'; 
import {connect} from 'react-redux';
import {fetchPost} from './actions/postAction/postAction';
import React from 'react';
import Button from './component/Button/Button';
import ListItem from './component/ListItem/ListItem';

function App(props) {
  const tempArr = [{
    fName: 'Raiyan',
    lName: 'Razi',
    email: 'raiyanrazi3357@gmail.com',
    age: 22,
    onlineStatus: true
  }];

  const buttonClickHandler = () => {
    props.fetchPost();
  }

  // console.log(props.posts);

  return (
    <div data-test="AppComponent">
      <Header/>
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
        <Button buttonText="Get Post" onClickHandler={() => buttonClickHandler()}/>
        {props.posts.map((post, index) => {
          return <ListItem title={post.title} desc={post.body} key={post.id}/>
        })}
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPost})(App);
