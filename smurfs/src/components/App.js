import React, { useEffect } from 'react';
import './App.css';
import SmurfCard from './SmurfCard'
import { fetchSmurfs } from '../actions'
import { connect } from 'react-redux'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
import SmurfForm from './SmurfForm'


const App = (props) => {
  const { fetchSmurfs } = props;


  useEffect(() => {

    fetchSmurfs();

  }, [fetchSmurfs]);

  const renderLoader = () => {
    return (
      <>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={115}
          timeout={3000} //3 secs
        />
      </>
    );
  };


  return (
    <div className="App">
      <h1>Hey look some Smurfs!</h1>
        <div className='smurfForm'>
      <SmurfForm />
      </div>
   <div className='bigDiv'>
      {props.isLoading ? (
        renderLoader()
      ) : (
          props.smurfs.map((smurfs, index) => {
            return <SmurfCard smurfs={smurfs} key={index} />;
          })
        )}
      </div>
      </div>
  )};


const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, { fetchSmurfs })(App);